import axios from "axios";
import MulitpleGifResponse from "../models/MultipleGifResponse";
import SingleGifResponse from "../models/SingleGifResponse";

const key: string = process.env.REACT_APP_API_KEY || "";

export const getTrendingGifs = (): Promise<MulitpleGifResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/trending", {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};

export const getGifsBySearchTerm = (
  searchTerm: string
): Promise<MulitpleGifResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: { api_key: key, q: searchTerm },
    })
    .then((response) => {
      return response.data;
    });
};

export const getGifById = (id: string): Promise<SingleGifResponse> => {
  return axios
    .get(`https://api.giphy.com/v1/gifs/${encodeURIComponent(id)}`, {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};
