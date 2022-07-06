import { Site } from "./models/site/site.model.js";

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
