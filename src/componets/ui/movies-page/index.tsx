import React, { FC } from "react";
import {
  Column,
  MoviesPageWrapper,
  SearchIconWrapper,
  SearchInput,
  Title,
  TitleDescription,
  TitleWrapper,
} from "./movies-page.styled";
import { Row } from "styled-bootstrap-grid";
import { Form, Text } from "react-uforms";
import SearchIcon from "../../../assets/images/icons/search-normal.png";
import useMoviesPage from "./use-movies-page";

const MoviesPage: FC = () => {
  const { handleOnSubmit } = useMoviesPage();
  return (
    <MoviesPageWrapper>
      <Row>
        <Column xl={6}>
          <TitleWrapper>
            <Title>MaileHereko</Title>
            <TitleDescription>
              List of movies and TV Shows, I, Pramod Poudel have watched till
              date. Explore what I have watched and also feel free to make a
              suggestion. 😉
            </TitleDescription>
            <SearchInput>
              <Form onSubmit={handleOnSubmit}>
                <button type="submit">
                  <SearchIconWrapper src={SearchIcon} />
                </button>
                <Text
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                />
              </Form>
            </SearchInput>
          </TitleWrapper>
        </Column>
      </Row>
    </MoviesPageWrapper>
  );
};
export default MoviesPage;
