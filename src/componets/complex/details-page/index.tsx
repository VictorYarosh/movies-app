import React from 'react';
import { Col, Row } from 'styled-bootstrap-grid';

import PosterImage from '../../../assets/images/poster/Black-Widow-Box-Office.png';
import { BigPoster, Breadcrumbs, Crumb, NameBlock, WrapperBigPoster } from './details-page.styled';
const DetailsPage = () => {
  return (
    <>
      <Row>
        <Col xl={12}>
          <WrapperBigPoster>
            <BigPoster src={PosterImage} alt="" />
          </WrapperBigPoster>
          <NameBlock>
            <Breadcrumbs>
              <Crumb>
                <a href="#">Wine</a>
              </Crumb>
              <Crumb>
                <a href="#">Wine</a>
              </Crumb>
            </Breadcrumbs>
          </NameBlock>
        </Col>
      </Row>
    </>
  );
};
export default DetailsPage;
