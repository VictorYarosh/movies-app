import Link from 'next/link';
import React, { FC } from 'react';

import { ContentTitle } from '../../ui/content-title';
import { MoviesCards } from '../../ui/movies-cards';
import { GroupLinks, LinksBtnCarousel } from '../../ui/movies-cards/movies-page.styled';
import { LinksBtn, LinksWrapper } from '../../ui/navbar/navbar.styled';
import Search from '../../ui/search';
import { Column, MoviesPageWrapper } from './movies-page.styled';

const AllPageMovies: FC = () => {
  return (
    <MoviesPageWrapper>
      <Column xl={8}>
        <ContentTitle />
      </Column>

      <Column xl={5}>
        <Search />
        <GroupLinks>
          <LinksWrapper>
            <LinksBtnCarousel>
              All
              <Link href="/"></Link>
            </LinksBtnCarousel>
            <LinksBtn>
              MoviesList
              <Link href="/"></Link>
            </LinksBtn>
            <LinksBtn>
              TV Shows
              <Link href="/"></Link>
            </LinksBtn>
          </LinksWrapper>
        </GroupLinks>
      </Column>

      <Column xl={12}>
        <MoviesCards />
      </Column>
    </MoviesPageWrapper>
  );
};
export default AllPageMovies;
