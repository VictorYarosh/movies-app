import React from 'react';
import { Form } from 'react-uforms';
import { Col, Row } from 'styled-bootstrap-grid';

import { Title, TitleWrapper } from '../../ui/content-title/content-title.styled';
import { MoviesCards } from '../../ui/movies-cards';
import Search from '../../ui/search';
import { ColumnStyled } from '../movies-page/movies-page.styled';
import useMoviesPage from '../movies-page/use-movies-page';

const TvShowsPage = () => {
  const { handleOnSubmit } = useMoviesPage();
  return (
    <>
      <Row>
        <Col xl={8}>
          <ColumnStyled>
            <TitleWrapper>
              <Title>TV Shows</Title>
            </TitleWrapper>
          </ColumnStyled>
        </Col>

        <Col md={6} xl={5}>
          <ColumnStyled>
            <Form onSubmit={handleOnSubmit}>
              <Search />
            </Form>
          </ColumnStyled>
        </Col>
      </Row>

      <MoviesCards />
    </>
  );
};
export default TvShowsPage;
