import express from "express";
import { indexRoute } from "./routes/index.routes.js";
import cors from "cors";
import getScheduledSitesData from "./controllers/scheduler.js"

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", indexRoute);
export { app };
