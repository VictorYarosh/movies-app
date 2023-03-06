import { useEffect, useState } from "react";
import axios from "axios";
import { MoviesCardsProps } from "./types";

import { api } from "../../../const";
import { moviesAll } from "./const";

const useMoviesCards = ({ movie, index }: MoviesCardsProps) => {
  const [data, setData] = useState(moviesAll);
  const [isLoading, setLoading] = useState(true);
  // const { movies, setMovies } = useState(CardsContext);

  useEffect(() => {
    const getMoviesAll = async () => {
      try {
        const response = await axios.get(
          `${api.base}popular?api_key=${api.key}&language=en-US`
        );

        setData(response.data);
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
