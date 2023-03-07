import { useEffect, useState } from "react";
import axios from "axios";

import { moviesAll } from "./const";

import { api } from "../../../const";

const useMoviesCards = () => {
  const [data, setData] = useState(moviesAll);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getMoviesAll = async () => {
      try {
        const response = await axios.get(
          `${api.base}popular?api_key=${api.key}&language=en-US`
        );
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getMoviesAll().catch((error) => {
      console.error(error);
    });
  }, []);

  return {
    data,
    isLoading,
  };
};
export default useMoviesCards;
