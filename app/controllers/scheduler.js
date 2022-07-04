import axios from "axios";

const URI = (() => {
    if (process.env.NODE_ENV === "production") {
      return "https://worldwide-news-hackathon.herokuapp.com/api";
    } else {
      return "http://localhost:5050/api";
    }
})();
  
const getScheduledSitesData = async () => {
    const articles = await axios.get(`${URI}`);
};

getScheduledSitesData();