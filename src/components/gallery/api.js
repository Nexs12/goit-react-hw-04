import axios from "axios";

const fetchPhotos = async (query, page = 1, per_page = 10) => {
  const accessKey = "XRSiRKqjuzTMtg1VpH3o9CNUCk4iYINLFnPQxrwOL_A";
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: query,
      page,
      per_page,
    },
  });
  return response.data;
};

export default fetchPhotos;