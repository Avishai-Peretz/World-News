import { Router } from "express";
import { update } from "../controllers/update.js";
import { siteRouter } from "./site.routes.js";

const indexRoute = Router();

indexRoute.use("/api", siteRouter);
indexRoute.use("/update", update);

export { indexRoute };
