import axios from 'axios';
import { useEffect, useState } from 'react';

import { api } from './const';
import { MoviesProps } from './types';

const useMoviesCards = () => {
  const [data, setData] = useState<MoviesProps>(null);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getMoviesAll = async () => {
      try {
        const response = await axios.get<MoviesProps>(
          `${api.base}/movie/popular?api_key=${api.key}&language=en-US&page=1`,
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

  return {
    data,
    isLoading,

    setData,
  };
};

export default useMoviesCards;
