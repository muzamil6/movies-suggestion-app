import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AxiosInstance from "../utils/axiosIntance";
import { MovieSearch } from "../type/type";

const useSearchResults = () => {
  const [results, setResults] = useState<MovieSearch[]>([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (query) {
          const response = await AxiosInstance.get("/search/movie", {
            params: {
              query,
            },
          });
          setResults(response.data.results);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchResults();
  }, [location.search, query]);

  return { results, query };
};

export default useSearchResults;
