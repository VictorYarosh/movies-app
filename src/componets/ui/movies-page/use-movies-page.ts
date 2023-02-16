import { useState } from "react";
const useMoviesPage = () => {
  const [movies, setMovies] = useState(false);

  const handleOnSubmit = () => {
    setMovies(true);
  };
  return {
    handleOnSubmit,
  };
};
export default useMoviesPage;
