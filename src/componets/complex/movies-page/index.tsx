import Link from 'next/link';
import React, { FC } from 'react';
import { Row } from 'styled-bootstrap-grid';

import { ContentTitle } from '../../ui/content-title';
import { MoviesCards } from '../../ui/movies-cards';
import { GroupLinks, LinksBtnCarousel } from '../../ui/movies-cards/movies-page.styled';
import { LinksBtn, LinksWrapper } from '../../ui/navbar/navbar.styled';
import Search from '../../ui/search';
import { Column, MoviesPageWrapper } from './movies-page.styled';

const MoviesPage: FC = () => {
  return (
    <MoviesPageWrapper>
      <Row>
        <Column xl={8}>
          <ContentTitle />
        </Column>
        <Column xl={6}>
          <Search />
          <GroupLinks>
            <LinksWrapper>
              <LinksBtnCarousel>
                All
                <Link href="/all-movies"></Link>
              </LinksBtnCarousel>
              <LinksBtn>
                MoviesList
                <Link href="/movies-list"></Link>
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
      </Row>
    </MoviesPageWrapper>
  );
};
export default MoviesPage;
