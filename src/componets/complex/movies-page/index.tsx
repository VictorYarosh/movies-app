import React, { FC } from "react";

import { MoviesPageWrapper } from "./movies-page.styled";

import ContentTitle from "../../ui/content-title";

const MoviesPage: FC = () => {
  return (
    <MoviesPageWrapper>
      <ContentTitle />
      {/*{movies.map(movie =>  <MovieCards movie={movie} key={movie.id}/>}*/}
    </MoviesPageWrapper>
  );
};
export default MoviesPage;
