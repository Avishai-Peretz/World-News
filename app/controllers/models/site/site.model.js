import mongoose from "mongoose";
import { siteSchema } from "./site.schema.js";

const Site = mongoose.model("Site", siteSchema);

export { Site };
