import axios from 'axios';

import { api } from '../../../const';

const useSearch = () => {
  const handleOnSubmit = async ({ values }: any) => {
    try {
      await axios.get(`${api.base}popular?api_key=${api.key}&language=en-US`);
      if (values.search) {
        // setMovies([...movies, values.search]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleOnSubmit,
  };
};
export default useSearch;
