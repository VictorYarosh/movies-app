import React from 'react';
import { Form } from 'react-uforms';
import { Col, Row } from 'styled-bootstrap-grid';

import { Title, TitleWrapper } from '../../ui/content-title/content-title.styled';
import { MoviesCards } from '../../ui/movies-cards';
import Search from '../../ui/search';
import { ColumnStyled } from '../home-page/home-page.styled';
import useHomePage from '../home-page/use-home-page';

const MoviesPage = () => {
  const { handleOnSubmit } = useHomePage();
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
export default MoviesPage;
