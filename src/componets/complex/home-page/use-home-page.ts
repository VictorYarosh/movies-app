import axios from 'axios';
import { useState } from 'react';

import { api } from '../../ui/movies-cards/const';

const useHomePage = () => {
  const [isActive, setIsActive] = useState(true);

  const handleOnSubmit = async ({ value }: any) => {
    try {
      await axios.get(`${api.base}/search/multi?api_key=${api.key}&language=en-US&page=1&include_adult=false`);
      if (value.search) {
        setIsActive(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleOnSubmit,

    isActive,
  };
};
export default useHomePage;
