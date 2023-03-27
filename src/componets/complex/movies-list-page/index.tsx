import React from 'react';
import { Col, Row } from 'styled-bootstrap-grid';

import { Title, TitleWrapper } from '../../ui/content-title/content-title.styled';
import { MoviesCards } from '../../ui/movies-cards';
import { ColumnStyled } from '../movies-page/movies-page.styled';

const MoviesListPage = () => {
  return (
    <>
      <Row>
        <Col xl={8}>
          <ColumnStyled>
            <TitleWrapper>
              <Title>Movies</Title>
            </TitleWrapper>
          </ColumnStyled>
        </Col>

        <Col xl={5}>
          {/*<ColumnStyled>*/}
          {/*  <Form onSubmit={handleOnSubmit}>*/}
          {/*    <Search />*/}
          {/*  </Form>*/}
          {/*</ColumnStyled>*/}
        </Col>
      </Row>

      <MoviesCards />
    </>
  );
};
export default MoviesListPage;
