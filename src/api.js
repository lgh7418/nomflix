import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "f83a1d5b2251b6ba4379c7dc3e3ebea9",
    language: "en-US",
  },
});

api.get("movie/top_rated");

export default api;
