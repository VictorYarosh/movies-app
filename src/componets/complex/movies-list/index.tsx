import React from 'react';
import { Col, Row } from 'styled-bootstrap-grid';

import { ContentTitle } from '../../ui/content-title';
import Search from '../../ui/search';
import { ColumnStyled } from '../movies-page/movies-page.styled';

const MoviesList = () => {
  return (
    <div>
      <Row>
        <Col xl={8}>
          <ColumnStyled>
            <ContentTitle />
          </ColumnStyled>
        </Col>

        <Col md={6} xl={5}>
          <ColumnStyled>
            <Search />
          </ColumnStyled>
        </Col>
      </Row>
    </div>
  );
};
export default MoviesList;
