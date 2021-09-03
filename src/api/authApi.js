import axios from "axios";
/**
 * passed params in api to support query params.
 */
const fetchAuthToken = async (params) =>
  new Promise((resolve, reject) => {
    axios
      .post("https://js1.10up.com/wp-json/jwt-auth/v1/token", {
        username: params.username,
        password: params.password,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

export default fetchAuthToken;
