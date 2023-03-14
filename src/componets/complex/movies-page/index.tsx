import React, { FC } from "react";

import { MoviesPageWrapper } from "./movies-page.styled";

import { ContentTitle } from "../../ui/content-title";
import { MoviesCards } from "../../ui/movies-cards";
import Search from "../../ui/search";

const MoviesPage: FC = () => {
  return (
    <MoviesPageWrapper>
      <ContentTitle />
      <Search />
      <MoviesCards />
    </MoviesPageWrapper>
  );
};
export default MoviesPage;
