import { useEffect, useState } from "react";
import axios from "axios";

import { api } from "../../../const";
import { MoviesProps } from "./types";

const useMoviesCards = () => {
  const [data, setData] = useState<MoviesProps>(null);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getMoviesAll = async () => {
      try {
        const response = await axios.get<MoviesProps>(
          `${api.base}popular?api_key=${api.key}&language=en-US&page=1`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getMoviesAll().catch((error) => {
      console.error(error);
    });
  }, []);

  const filterMovies = () => {
    let movies = {};
    data.results.map(({ id, ...res }) => {
      movies = { ...movies, [id]: { ...res } };
    });
  };

  const handleOnSubmit = () => {};
  return {
    data,
    isLoading,

    handleOnSubmit,
    filterMovies,
  };
};

export default useMoviesCards;
