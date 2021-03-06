import axios from "axios";

const fetchPosts = async () =>
  new Promise((resolve, reject) => {
    axios
      .get("https://js1.10up.com/wp-json/wp/v2/posts")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

export default fetchPosts;
