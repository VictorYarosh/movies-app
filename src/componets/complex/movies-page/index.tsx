import React, { FC } from "react";

import { MoviesPageWrapper } from "./movies-page.styled";

import ContentTitle from "../../ui/content-title";
import MoviesCards from "../../ui/movies-cards";

const MoviesPage: FC = () => {
  return (
    <MoviesPageWrapper>
      <ContentTitle />

      <MoviesCards />
    </MoviesPageWrapper>
  );
};
export default MoviesPage;
