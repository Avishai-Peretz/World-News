import getScheduledSitesData from "../controllers/scheduler.js";

const startUpdate = async () => {
  const URI = (() => {
    if (process.env.NODE_ENV === "production") {
      return "https://worldwide-news-hackathon.herokuapp.com/update";
    } else {
      return "http://localhost:5050/update";
    }
  })();
  try {
    const article = await axios.get(URI);
    return article.data;
  } catch (e) {
    console.log(e.message);
    throw new Error(e.message);
  }
}
startUpdate();