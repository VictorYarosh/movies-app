import React, { FC } from 'react';
import { Form } from 'react-uforms';
import { Col, Row } from 'styled-bootstrap-grid';

import ToggleGroup from '../../ui/button';
import { Title, TitleDescription, TitleWrapper } from '../../ui/content-title/content-title.styled';
import { MoviesCards } from '../../ui/movies-cards';
import Search from '../../ui/search';
import { ColumnStyled } from './home-page.styled';
import useHomePage from './use-home-page';

const HomePage: FC = () => {
  const { handleOnSubmit } = useHomePage();

  return (
    <>
      <Row>
        <Col xl={8}>
          <ColumnStyled>
            <TitleWrapper>
              <Title>MaileHereko</Title>
              <TitleDescription>
                List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and
                also feel free to make a suggestion. 😉
              </TitleDescription>
            </TitleWrapper>
          </ColumnStyled>
        </Col>

        <Col sm={7} md={6} xl={5}>
          <ColumnStyled>
            <Form onSubmit={handleOnSubmit}>
              <Search />
            </Form>

            <ToggleGroup />

            {/*<GroupLinks>*/}
            {/*  <LinksWrapper>*/}
            {/*    <ToggleGroup>All</LinksBtn>*/}
            {/*    <Link href="/movies">*/}
            {/*      <ToggleGroup>Movies</ToggleGroup>*/}
            {/*    </Link>*/}
            {/*    <Link href="/tv-shows">*/}
            {/*      <ToggleGroup>TV Shows</ToggleGroup>*/}
            {/*    </Link>*/}
            {/*  </LinksWrapper>*/}
            {/*</GroupLinks>*/}
          </ColumnStyled>
        </Col>
      </Row>

      <MoviesCards />
    </>
  );
};
export default HomePage;
