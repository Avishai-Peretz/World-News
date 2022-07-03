import axios from "axios";

const URI = (() => {
    if (process.env.NODE_ENV === "production") {
      return "/api";
    } else {
      return "http://localhost:5050/api";
    }
})();
  
const getScheduledSitesData = async () => {
    const articles = await axios.get("/api");
};

getScheduledSitesData();