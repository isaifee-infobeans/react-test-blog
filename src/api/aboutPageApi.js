import axios from "axios";

const fetchAboutPage = async () =>
  new Promise((resolve, reject) => {
    axios
      .get("https://js1.10up.com/wp-json/wp/v2/pages")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

export default fetchAboutPage;
