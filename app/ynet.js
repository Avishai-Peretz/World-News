import puppeteer from "puppeteer";
import axios from "axios";
import { Site } from "./controllers/models/site/site.model.js";
import dotenv from "dotenv";
dotenv.config();

export const getYnetData = async () => {
  try {
  // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
  const browser = await puppeteer.launch({ args: ["--no-sandbox", '--disable-setuid-sandbox', "--disable-notifications"]});
  const page = await browser.newPage();
  await page.goto("https://www.ynet.co.il/");
  await page.waitForSelector("h1.slotTitle > span:nth-child(1)", {
    timeout: 10000,
  });
  const firstPageInfo = await page.evaluate(() => {
    const title = document.querySelector(
      "h1.slotTitle > span:nth-child(1)"
    ).innerText;
    const img = document.querySelector(".SiteImageMedia").src;
    const description = document.querySelector(".slotSubTitle").innerText;
    const url = document.querySelector(".TopStory1280Componenta > div > div > div > div > a").href;
    return { title, img, description, url };
  });
  await page.goto(firstPageInfo.url);
  await page.waitForSelector(".text_editor_paragraph.rtl", {
    timeout: 10000,
  });
    const url = page.url();  
  const grabContent = await page.evaluate(() => {
    const content = [...document.querySelectorAll(".text_editor_paragraph.rtl")]
      .map((elem) => elem.innerText)
      .filter((elem) => elem.length > 10)
      .join("\n");
    return content;
  });
  await browser.close();
  const compare = await Site.find( {url: url} )
  if (compare.length === 0 || !(compare[0].ur === url || compare[0].img === firstPageInfo.img)) {
    const body = {
      url: url,
      name: "ynet",
      img: firstPageInfo.img,
      he: {
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
          "to[0]": "en,ar,ru",
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
    body.ar = {
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
  } else return null;
  } catch (err) { throw new Error(err); }
};
