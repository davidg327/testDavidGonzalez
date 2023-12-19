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

export function getUserId(Id: string) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${URL}/user/${Id}`, {
        headers: {'app-id': '63473330c1927d386ca6a3a5'},
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function updateUser(Id: string, values: any) {
  return new Promise((resolve, reject) => {
    axios
      .put(`${URL}/user/${Id}`, values, {
        headers: {'app-id': '63473330c1927d386ca6a3a5'},
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
