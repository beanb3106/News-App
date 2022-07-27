import axios from "../utils/axios"
import { apiKey } from "../utils/constants"

export const fetchNews = async (params) => {
  const query = new URLSearchParams(params);
  const resp = await axios.get(`/v2/everything?${query.toString()}&apiKey=${apiKey}`);
  return resp.data;
};
