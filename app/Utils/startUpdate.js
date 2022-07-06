import getScheduledSitesData from "../controllers/scheduler.js";

const startUpdate = async () => {
    try {
        getScheduledSitesData()
    }
    catch {
      return [];
    }
}
startUpdate();