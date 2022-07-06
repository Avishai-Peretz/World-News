import axios from "axios";

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
      console.log(".............................................................",article.data);
      return article.data;
    }
    catch {
      return [];
    }
}
startUpdate();