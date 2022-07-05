import { getArticles } from "./site.controllers.js";
import { Site } from "./models/site/site.model.js";
import { getYnetData } from "../ynet.js";
import { getAlbayanData } from "../albayan.js";
import { getPanetData } from "../panet.js";
import { getMoscowTimesData } from "../moscowtimes.js";
import { getNDTVData } from "../jansatta.js";
import { getDwData } from "../dw.js";


(async (req, res) => {
  try {
    let data = await Site.find();    
    const getTheArticles =await getArticles();
    const articles = getTheArticles ? getTheArticles : [];
      await getAlbayanData();
      console.log("1")
      await getPanetData();
      console.log("2")
      await getDwData();
      console.log("3")
      await getYnetData();
      console.log("4")
      await getMoscowTimesData();
      console.log("5")
      await getNDTVData();
      console.log("6")
      data = await Site.find();
  } catch (e) {
    throw new Error(e);
  }
  console.log("success");
})()
console.log("run")