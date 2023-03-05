export interface MoviesProps {
  setMovies: (value: string[]) => void;
  movies: string[];
}

export interface MoviesCardsProps {
  movie: string;
  index: number;
}
