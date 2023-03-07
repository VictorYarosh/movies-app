import { createContext } from "react";
import { MoviesProps } from "../../ui/movies-cards/types";

export const CardsContext = createContext<MoviesProps>({
  movies: [],
  setMovies: () => null,
});
