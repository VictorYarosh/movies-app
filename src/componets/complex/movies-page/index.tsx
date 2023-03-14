import React, { FC } from 'react';

import { ContentTitle } from '../../ui/content-title';
import { MoviesCards } from '../../ui/movies-cards';
import Search from '../../ui/search';
import { MoviesPageWrapper } from './movies-page.styled';

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
