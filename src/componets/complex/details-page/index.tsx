import { any } from 'prop-types';
import React from 'react';
import { Col, Row } from 'styled-bootstrap-grid';

import PosterImage from '../../../assets/images/poster/Black-Widow-Box-Office.png';
import MainCard from '../../ui/main-card';
import { BigPoster, Breadcrumbs, Crumb, NameBlock, TitleMovie, WrapperBigPoster } from './details-page.styled';
const DetailsPage = () => {
  return (
    <>
      <Row>
        <Col xl={12}>
          <WrapperBigPoster>
            <BigPoster src={PosterImage} alt="" />
          </WrapperBigPoster>
          <NameBlock>
            <Breadcrumbs separator={any}>
              <Crumb>
                <a href="#">Wine</a>
              </Crumb>
              <Crumb>
                <a href="#">Wine</a>
              </Crumb>
            </Breadcrumbs>
            <TitleMovie>Avengers: Endgame</TitleMovie>
          </NameBlock>

          <MainCard />
        </Col>
      </Row>
    </>
  );
};
export default DetailsPage;
