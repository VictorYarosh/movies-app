export interface MoviesProps {
  setMovies: (value: string[]) => void;
  movies: string[];
}

export interface MoviesCardsProps {
  movies: string;
  setMovies: (value: string[]) => void;
}
