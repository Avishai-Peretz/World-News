import { Site } from "../models/site/site.model.js";
import { getYnetData } from "../ynet.js";
import { getAlbayanData } from "../albayan.js";
import { getPanetData } from "../panet.js";
import { getMoscowTimesData } from "../moscowtimes.js";
import { getNDTVData } from "../jansatta.js";
import { getDwData } from "../dw.js";
import axios from "axios";

const URI = (() => {
    if (process.env.NODE_ENV === "production") {
      return "/api";
    } else {
      return "http://localhost:5050/api";
    }
  })();
const getScheduledSitesData = async () => {
    const articles = await axios.get(`${URI}`);
};

getScheduledSitesData();