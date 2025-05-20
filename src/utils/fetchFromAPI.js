import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'


const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};
// console.log("🔍 All env vars:", process.env);

// console.log("🔑 RapidAPI key:", process.env.REACT_APP_RAPID_API_KEY);

export const fetchFromAPI = async (url) =>{
try{
  const {data} =  await axios.get(`${BASE_URL}/${url}`, options)

  return data;
}
  catch (error) {
    console.error("API fetch error:", error);
    throw error;
  }
}

