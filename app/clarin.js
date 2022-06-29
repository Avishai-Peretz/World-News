import puppeteer from "puppeteer";
import axios from "axios";
import { Site } from "./models/site/site.model.js";
import dotenv from "dotenv";
dotenv.config();

export const getClarinData = async () => {
  console.log(process.env.API_KEY);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.clarin.com/edicioninternacional/");
  await page.waitForSelector(".link_article", {
    timeout: 100000,
  });
  await page.click("a.link_article");
  await page.waitForSelector("h1", {
    timeout: 100000,
  });
  const firstPageInfo = await page.evaluate(() => {
    const title = document.querySelector("h1").innerText;
    // const img = document.querySelector(".SiteImageMedia").src;
    const img = document.querySelector(".entry-media >picture >img").src;

    const description = document.querySelector(".bajada h2").innerText;
    return { title, img, description };
  });
  // console.log(firstPageInfo);
  const grabContent = await page.evaluate(() => {
    const content = [...document.querySelectorAll(".body-nota")]
      .map((elem) => elem.innerText)
      .filter((elem) => elem.length > 10)
      .join("\n");
    return content;
  });
  // console.log(grabContent);

  await browser.close();
  const body = {
    name: "clarin",
    img: firstPageInfo.img,
  };
  const createOptions = (content) => {
    return {
      method: "POST",
      url: "https://microsoft-translator-text.p.rapidapi.com/translate",
      params: {
        "api-version": "3.0",
        "to[0]": "en,ar,ru,he",
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
  body.he = {
    title: title[3].text,
    description: description[3].text,
    content: mainContent[3].text,
  };
  // console.log(body);
  const site = new Site(body);
  const newSite = await site.save();
  return newSite;
};

// getClarinData();
