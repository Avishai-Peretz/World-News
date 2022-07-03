import puppeteer from "puppeteer";
import axios from "axios";
import { Site } from "./models/site/site.model.js";
import dotenv from "dotenv";
dotenv.config();

export const getAlbayanData = async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-notifications"] , headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.albayan.ae/");
  await page.waitForSelector(".albayan .first-child", {
    timeout: 10000,
  });
  const firstPageInfo = await page.evaluate(() => {
    debugger
      const title = document.querySelectorAll("h2 > a")[1].innerText;
      const img = document.querySelector(".media > a > .fade-in").src;
      const description = document.querySelector(".lead").innerText || "";
      return { title, img, description }
  });
  await page.click(".albayan.first-child > article > section > h2 > a");
  await page.waitForSelector("h1.title", {
    timeout: 10000,
  });
  const grabContent = await page.evaluate(() => {
    const content = [...document.querySelectorAll("#articledetails > p")]
      .map((elem) => elem.innerText)
      .filter((elem) => elem.length > 10);
    content.pop();
    return content.join("\n");
  });
  await browser.close();
  const body = {
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
      console.error(err);
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
};
