import { Router } from "express";
import getScheduledSitesData from "../controllers/scheduler.js";
import { siteRouter } from "./site.routes.js";

const indexRoute = Router();

indexRoute.use("/api", siteRouter);
indexRoute.use("/update", getScheduledSitesData);

export { indexRoute };
