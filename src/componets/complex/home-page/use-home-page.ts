import axios from 'axios';
import { useState } from 'react';

import { api } from '../../ui/movies-cards/const';
import { MoviesProps } from '../../ui/movies-cards/types';
import useMoviesCards from '../../ui/movies-cards/use-movies-cards';

const useHomePage = () => {
  const [isActive] = useState(true);

  const { data } = useMoviesCards();

  const handleOnSubmit = async ({ value }: any) => {
    try {
      await axios.get<MoviesProps>(
        `${api.base}search/movie?api_key=${api.key}&language=en-US&query=${value.search}&page=1`,
      );
      data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleOnSubmit,

    isActive,
  };
};
export default useHomePage;
