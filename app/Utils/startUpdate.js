import axios from "axios";

const startUpdate = async (req, res) => {
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
    console.log("503 is just fine, we dont expect to get nothing on this call" + e.messag);
  }
}
startUpdate();