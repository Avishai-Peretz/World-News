import express from "express";

import {
  getSitesData,
  getSpecificSiteData,
} from "../controllers/site.controllers.js";

const siteRouter = express.Router();

siteRouter.get("/", getSitesData);
siteRouter.get("/:name", getSpecificSiteData);

export { siteRouter };
