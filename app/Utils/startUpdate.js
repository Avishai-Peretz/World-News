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
    return res.status(200).send(article.data);
  } catch (e) {
    return res.status(400).send(e.message.toString());
  }
}
startUpdate();