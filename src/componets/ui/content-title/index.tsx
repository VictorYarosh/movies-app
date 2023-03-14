import { Row } from "styled-bootstrap-grid";
import React from "react";

import {
  Column,
  Title,
  TitleDescription,
  TitleWrapper,
} from "../../ui/content-title/content-title.styled";

const ContentTitle = () => {
  return (
    <>
      <Row>
        <Column xl={7}>
          <TitleWrapper>
            <Title>MaileHereko</Title>
            <TitleDescription>
              List of movies and TV Shows, I, Pramod Poudel have watched till
              date. Explore what I have watched and also feel free to make a
              suggestion. 😉
            </TitleDescription>
          </TitleWrapper>
        </Column>
      </Row>
    </>
  );
};

export default ContentTitle;
