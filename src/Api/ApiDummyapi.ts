import axios from "axios";

const URL = 'https://dummyapi.io/data/v1/';

export function getUsers() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${URL}/user`, {headers: {'app-id': '63473330c1927d386ca6a3a5'}})
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
