import axios from "axios";
import { NotificationManager } from "react-notifications";

const BASE_URL = "https://rickandmortyapi.com/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const personsApi = {
  getСharacterByPages: async function (page = 1) {
    const url = "character/?page=" + page;
    const response = await instance(url);
    return response.data;
  },
  getSingleCharacter: async function (id) {
    const url = "character/" + id;
    const response = await instance(url);
    return response.data;
  },
  getFiltredCharacters: async function (params) {
    try {
      const url = "character/";
      const response = await instance.get(url, { params });
      return response.data;
    } catch (error) {
      NotificationManager.warning(error.response.data.error, "", 5000);
      return null;
    }
  },
};
