import { getArticles } from "./site.controllers.js";
import { Site } from "./models/site/site.model.js";
import { getYnetData } from "../ynet.js";
import { getAlbayanData } from "../albayan.js";
import { getPanetData } from "../panet.js";
import { getMoscowTimesData } from "../moscowtimes.js";
import { getNDTVData } from "../jansatta.js";
import { getDwData } from "../dw.js";


const getScheduledSitesData = async (req, res) => {
  try {
    console.log("start scraping");
      await getAlbayanData();
      console.log("1: getAlbayanData finished");
      await getPanetData();
      console.log("2: getPanetData finished");
      await getDwData();
      console.log("3: getDwData finished");
      await getYnetData();
      console.log("4: getYnetData finished")
      await getMoscowTimesData();
      console.log("5: getMoscowTimesData finished")
      await getNDTVData();
      console.log("6 : getNDTVData finished")
      console.log("***scraping has finished***")
      const data = await Site.find();
    if (req) { return res.status(200).send(data) } else return;
  } catch (e) {
    if (req) {
      console.log("failed to update")
      return res.status(400).send(e.message.toString());
    }
    else {
      console.log("update failed: " + e.message);
      throw new Error(e);
    }
  }
};

export default getScheduledSitesData;


