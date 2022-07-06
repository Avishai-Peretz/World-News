import puppeteer from "puppeteer";
import axios from "axios";
import { Site } from "./controllers/models/site/site.model.js";
import dotenv from "dotenv";
dotenv.config();

export const getAlbayanData = async () => {
  try {
    const browser = await puppeteer.launch({ args: ["--no-sandbox", '--disable-setuid-sandbox', "--disable-notifications"]});
    const page = await browser.newPage();
    await page.goto("https://www.albayan.ae/");
    await page.waitForSelector(".albayan .first-child", {
      timeout: 100000,
    });
    const firstPageInfo = await page.evaluate(() => {
      const title = document.querySelector(".albayan > article > .text > h2 > a").innerText;
      const img = document.querySelector(".media > a > .fade-in").src;
      const description = document.querySelector(".lead").innerText || "";
      const url = document.querySelector(".albayan.first-child > article > section > h2 > a").href;
    return { title, img, description, url };
    });   
    
    const url = firstPageInfo.url.indexOf("https://www.albayan.ae/") === 0 ? firstPageInfo.url: `https://www.albayan.ae${firstPageInfo.url}`;
    await page.goto(url);
    await page.waitForSelector("h1.title", {
      timeout: 100000,
    });
    const grabContent = await page.evaluate(() => {
      const content = [...document.querySelectorAll("#articledetails > div")]
        .map((elem) => elem.innerText)
        .filter((elem) => elem.length > 10);
      content.pop();
      return content.join("\n");
    });
    await browser.close();
    const compare = await Site.find( {url: url} )
   if (compare.length === 0 || !(compare[0].url === url || compare[0].img === firstPageInfo.img)) {
      const body = {
        url: url,
        name: "albayan",
        img: firstPageInfo.img,
        ar: {
          title: firstPageInfo.title,
          description: firstPageInfo.description,
          content: grabContent,
        },
      };
      const createOptions = (content) => {
        return {
          method: "POST",
          url: "https://microsoft-translator-text.p.rapidapi.com/translate",
          params: {
            "api-version": "3.0",
            "to[0]": "en,he,ru",
            textType: "plain",
            profanityAction: "NoAction",
          },
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": `${process.env.API_KEY}`,
            "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
          },
          data: [{ Text: content }],
        };
      };
      const sendGetRequest = async (content) => {
        try {
          const resp = await axios.request(createOptions(content));
          return resp.data[0].translations;
        } catch (err) {
          throw new Error(err);
        }
      };
      const title = await sendGetRequest(firstPageInfo.title);
      const description = await sendGetRequest(firstPageInfo.description);
      const mainContent = await sendGetRequest(grabContent);
      body.en = {
        title: title[0].text,
        description: description[0].text,
        content: mainContent[0].text,
      };
      body.he = {
        title: title[1].text,
        description: description[1].text,
        content: mainContent[1].text,
      };
      body.ru = {
        title: title[2].text,
        description: description[2].text,
        content: mainContent[2].text,
      };
      const site = new Site(body);
      const newSite = await site.save();
      return newSite;
    } return null;
  } catch (err) { throw new Error(err); }
};
