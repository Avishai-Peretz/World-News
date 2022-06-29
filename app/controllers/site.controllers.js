import { Site } from "../models/site/site.model.js";
import { getYnetData } from "../ynet.js";
import { getAlbayanData } from "../albayan.js";
import { getPanetData } from "../panet.js";
const getSitesData = async (req, res) => {
  try {
    const data = await Site.find();
    if (!data) {
      throw Error("Data not found");
    }
    if (Math.abs(new Date() - data[0].createdAt) / 36e5 > 4) {
      await Site.deleteMany();
      await getYnetData();
      await getAlbayanData();
      await getPanetData();
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

export { getSitesData, getSpecificSiteData };
