import { getArticles } from "./site.controllers.js";
import { Site } from "./models/site/site.model.js";
import { getYnetData } from "../ynet.js";
import { getAlbayanData } from "../albayan.js";
import { getPanetData } from "../panet.js";
import { getMoscowTimesData } from "../moscowtimes.js";
import { getJansatta } from "../jansatta.js";
import { getDwData } from "../dw.js";


const getScheduledSitesData = async (req, res) => {
  try {
      console.log("start scraping");
      await getAlbayanData();
      console.log("1: getAlbayanData finished");
      await getDwData();
      console.log("2: getDwData finished");
      await getYnetData();
      console.log("3: getYnetData finished");
      await getMoscowTimesData();
      console.log("4: getMoscowTimesData finished");
      await getJansatta();
      console.log("5 : getJansatta finished");
      await getPanetData();
      console.log("6: getPanetData finished");
      console.log("***scraping has finished***");
      let data = await Site.find();
    if (req) {
      console.log("***updating has finished***")
      return res.status(200).send(data)
    } else return;
  } catch (e) {
    if (req) {
      console.log("failed to update" + e.message.toString())
      return res.status(400).send(e.message.toString());
    }
    else {
      console.log("update failed: " + e.message);
      throw new Error(e);
    }
  }
};

export default getScheduledSitesData;


