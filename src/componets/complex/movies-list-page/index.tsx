import React from 'react';
import { Col, Row } from 'styled-bootstrap-grid';

import { Layout } from '../../containers/layout';
import { Title, TitleWrapper } from '../../ui/content-title/content-title.styled';
import MoviesCards from '../../ui/movies-cards';
import { ColumnStyled } from '../movies-page/movies-page.styled';

const MoviesListPage = () => {
  return (
    <Layout>
      <Row>
        <Col xl={8}>
          <ColumnStyled>
            <TitleWrapper>
              <Title>Movies</Title>
            </TitleWrapper>
          </ColumnStyled>
        </Col>
      </Row>

      <MoviesCards />
    </Layout>
  );
};
export default MoviesListPage;
