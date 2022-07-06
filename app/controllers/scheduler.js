import { getArticles } from "./site.controllers.js";
import { Site } from "./models/site/site.model.js";
import { getYnetData } from "../ynet.js";
import { getAlbayanData } from "../albayan.js";
import { getPanetData } from "../panet.js";
import { getMoscowTimesData } from "../moscowtimes.js";
import { getNDTVData } from "../jansatta.js";
import { getDwData } from "../dw.js";


const getScheduledSitesData = async () => {
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
  } catch (e) {
    console.log("update failed: " + e.message);
    throw new Error(e);
  }
};

export default getScheduledSitesData;


