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
    let data = await Site.find();    
    const getTheArticles =await getArticles();
    const articles = getTheArticles ? getTheArticles : [];
    if (
      (articles.length < 6 || data.length < 6 ) || ((data.length > 0 || articles.length >0) && ((new Date).getTime() - (new Date(data[0].createdAt)).getTime())/3600000 > 1)
    ) {
      await getPanetData();
      await getAlbayanData();
      await getDwData();
      await getYnetData();
      await getMoscowTimesData();
      await getNDTVData();
      data = await Site.find();
    }
  } catch (e) {
    throw new Error(e);
  }
  console.log("success");
};
console.log("run")
getScheduledSitesData();
export default getScheduledSitesData;


