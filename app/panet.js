import puppeteer from "puppeteer";
import axios from "axios";
import { Site } from "./controllers/models/site/site.model.js";
import dotenv from "dotenv";
dotenv.config();

export const getPanetData = async () => {
  try {
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-notifications"], headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.panet.co.il/");
  await page.waitForSelector(".panet-title", {
    timeout: 10000,
  });

  const firstPageInfo = await page.evaluate(() => {
    const title = document.querySelector(
      "#topRightArticle > .panet-title"
    ).innerText;
    const img = document.querySelector(
      "#topRightArticle > .panet-thumbnail-wrapper > a > .panet-thumbnail"
    ).src;
    const description = document.querySelector(
      "#topRightArticle > .panet-abstract"
    ).innerText;
    return { title, img, description };
  });
  await page.click("#topRightArticle > .panet-title > a ");
  await page.waitForSelector(".panet-main-content", {
    timeout: 30000,
  });
  const grabContent = await page.evaluate(() => {
    const content = [...document.querySelectorAll(".panet-main-content > p")]
      .map((elem) => elem.innerText)
      .filter((elem) => elem.length > 10)
      .join("\n");
    return content;
  });
  await browser.close();
  const compare = await Site.find( {img: firstPageInfo.img} )
  if (compare.length === 0) {
      const body = {
        name: "panet",
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
  } else return null;
  } catch (err) { throw new Error(err); }
};
