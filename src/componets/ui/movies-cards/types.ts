export interface MoviesProps {
  movies: string[];
  setMovies: (value: string[]) => void;
}

export interface MoviesCardsProps {
  index: number;
  movie: string;
}
