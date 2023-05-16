import React from 'react';
import { Form } from 'react-uforms';
import { Col, Row } from 'styled-bootstrap-grid';

import ToggleGroup from '../../ui/button';
import { Title, TitleWrapper } from '../../ui/content-title/content-title.styled';
import { MoviesCards } from '../../ui/movies-cards';
import Search from '../../ui/search';
import { ColumnStyled } from '../home-page/home-page.styled';
import useHomePage from '../home-page/use-home-page';

const TvShowsPage = () => {
  const { handleOnSubmit } = useHomePage();
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
            <ToggleGroup />
          </ColumnStyled>
        </Col>
      </Row>

      <MoviesCards />
    </>
  );
};
export default TvShowsPage;
