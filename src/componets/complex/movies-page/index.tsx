import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Form } from 'react-uforms';
import { Col, Row } from 'styled-bootstrap-grid';

import { ContentTitle } from '../../ui/content-title';
import { MoviesCards } from '../../ui/movies-cards';
import Search from '../../ui/search';
import { ColumnStyled, GroupLinks, LinksBtn, LinksWrapper } from './movies-page.styled';
import useMoviesPage from './use-movies-page';

const MoviesPage: FC = () => {
  const { handleOnSubmit } = useMoviesPage();
  const router = useRouter();

  return (
    <>
      <Row>
        <Col xl={8}>
          <ColumnStyled>
            <ContentTitle />
          </ColumnStyled>
        </Col>

        <Col md={6} xl={5}>
          <ColumnStyled>
            <Form onSubmit={handleOnSubmit}>
              <Search />
            </Form>

            <GroupLinks>
              <LinksWrapper>
                <LinksBtn>All</LinksBtn>
                <LinksBtn onClick={() => router.push('/movies-list')}>MoviesList</LinksBtn>
                <LinksBtn onClick={() => router.push('/tv-shows')}>TV Shows</LinksBtn>
              </LinksWrapper>
            </GroupLinks>
          </ColumnStyled>
        </Col>
      </Row>

      <MoviesCards />
    </>
  );
};
export default MoviesPage;
