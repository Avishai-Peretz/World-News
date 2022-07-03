import { Router } from "express";
import { siteRouter } from "./site.routes.js";

const indexRoute = Router();

indexRoute.use("/api", siteRouter);

export { indexRoute };
