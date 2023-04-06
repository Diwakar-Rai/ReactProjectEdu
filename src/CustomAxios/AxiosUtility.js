import axios from "axios";

export const getAxios = async (url, headers) => {
    let { data } = await axios.get(url, { headers });
  return data;
};
