import { Site } from "../models/site/site.model.js";
import { getYnetData } from "../ynet.js";
import { getAlbayanData } from "../albayan.js";
import { getPanetData } from "../panet.js";
import { getMoscowTimesData } from "../moscowtimes.js";
import { getNDTVData } from "../jansatta.js";
import { getDwData } from "../dw.js";

const getSitesData = async (req, res) => {
  try {
    let data = await Site.find();
    await Site.deleteMany();
    await getAlbayanData();
    await getDwData();
    await getYnetData();
    await getPanetData();
    await getMoscowTimesData();
    await getNDTVData();
    data = await Site.find();
    return res.status(200).send(data);
  } catch (e) {
    return res.status(400).send(e.message.toString());
  }
};


getSitesData();