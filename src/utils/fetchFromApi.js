import { useState, useCallback } from "react";
import axios from "axios";

const useFetch = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");

  const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

  const options = {
    params: {
      // maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  const fetchFromApi = useCallback(async (url) => {
    setIsLoaded(false);
    try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);
      setIsLoaded(true);
      setNextPageToken(data.continuation);
      return data;
    } catch (e) {
      console.log(e);
      setError(true);
    }
  }, []);

  return {
    isLoaded,
    error,
    setError,
    setIsLoaded,
    fetchFromApi,
    nextPageToken,
  };
};

export default useFetch;
