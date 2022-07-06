import axios from "axios";
import getScheduledSitesData from "../controllers/scheduler";

const startUpdate = async () => {
    try {
        getScheduledSitesData()
    }
    catch {
      return [];
    }
}
startUpdate();