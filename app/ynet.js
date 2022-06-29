import puppeteer from "puppeteer";
import axios from "axios";
import { Site } from "./models/site/site.model.js";

export const getYnetData = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.ynet.co.il/");
  await page.waitForSelector("h1.slotTitle > span:nth-child(1)", {
    timeout: 100000,
  });
  const firstPageInfo = await page.evaluate(() => {
    const title = document.querySelector(
      "h1.slotTitle > span:nth-child(1)"
    ).innerText;
    const img = document.querySelector(".SiteImageMedia").src;
    const description = document.querySelector(".slotSubTitle").innerText;
    return { title, img, description };
  });
  await page.click(".TopStory1280Componenta > div > div > div > div > a");
  await page.waitForSelector(".text_editor_paragraph.rtl", {
    timeout: 100000,
  });
  const grabContent = await page.evaluate(() => {
    const content = [...document.querySelectorAll(".text_editor_paragraph.rtl")]
      .map((elem) => elem.innerText)
      .filter((elem) => elem.length > 10)
      .join("\n");
    return content;
  });
  await browser.close();
  const body = {
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
        "X-RapidAPI-Key": "fac48475e4msh6ae5990d3b2722cp1144cdjsnb701dac1e3db",
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
  const site = new Site(body);
  const newSite = await site.save();
  return newSite;
};
