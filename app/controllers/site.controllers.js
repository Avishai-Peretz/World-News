import { Site } from "./models/site/site.model.js";
import { getYnetData } from "../ynet.js";
import { getAlbayanData } from "../albayan.js";
import { getPanetData } from "../panet.js";
import { getMoscowTimesData } from "../moscowtimes.js";
import { getNDTVData } from "../jansatta.js";
import { getDwData } from "../dw.js";



const getArticles = async () => {
  const URI = (() => {
    if (process.env.NODE_ENV === "production") {
      return "https://worldwide-news-hackathon.herokuapp.com/api";
    } else {
      return "http://localhost:5050/api";
    }
  })();
  try {
    const article = await axios.get(URI);
    console.log(".............................................................",article.length);
    return article.data;
  }
  catch {
    return [];
  }
}

const getSitesData = async (req, res) => {
  try {
    const data = await Site.find();
    if (!data) {
      throw Error("Site not found");
    }
    return res.status(200).send(data);
  } catch (e) {
    return res.status(400).send(e.message.toString());
  }
};

const getSpecificSiteData = async (req, res) => {
  try {
    const site = await Site.findOne({ name: req.params.name });
    if (!site) {
      throw Error("Site not found");
    }
    return res.status(200).send(site);
  } catch (e) {
    return res.status(400).send(e.message.toString());
  }
};

export { getSitesData, getSpecificSiteData, getArticles };
