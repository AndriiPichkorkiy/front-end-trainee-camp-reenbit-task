import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const personsApi = {
  getСharacterByPages: async function (page = 1) {
    console.log("page ", page);
    const url = "character/?page=" + page;
    const response = await instance(url);
    return response.data;
  },
};
