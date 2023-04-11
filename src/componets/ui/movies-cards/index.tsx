import Image from 'next/image';
import React, { FC } from 'react';
import { Col, Row } from 'styled-bootstrap-grid';

import AverageStar from '../../../assets/images/icons/star.png';
import LoadingSpinner from '../../../assets/images/lodiang-spiner.svg';
import {
  AllMovies,
  AllMoviesTitle,
  AllMoviesTitleDes,
  CardAverage,
  CardAverageStar,
  CardAverageWrapper,
  CardMoviesImage,
  CardMoviesTitle,
  CardsWrapper,
  Loading,
  WrapperMovies,
} from './movies-page.styled';
import useMoviesCards from './use-movies-cards';

export const MoviesCards: FC = () => {
  const { data, isLoading } = useMoviesCards();
  return (
    <WrapperMovies>
      {isLoading ? (
        <Loading>
          <Image src={LoadingSpinner} alt="" />
        </Loading>
      ) : (
        <Row>
          <Col xl={12}>
            <AllMovies>
              <AllMoviesTitle>All</AllMoviesTitle>
              <AllMoviesTitleDes>({data.total_pages})</AllMoviesTitleDes>
            </AllMovies>
          </Col>
          {data.results.map((data) => (
            <Col md={6} lg={4} xl={3} key={data.id}>
              <CardsWrapper>
                <CardAverageWrapper>
                  <CardAverageStar>
                    <Image src={AverageStar} alt="" width={24} height={24} />
                  </CardAverageStar>
                  <CardAverage>{data.vote_average}</CardAverage>
                </CardAverageWrapper>

                <CardMoviesImage
                  alt=""
                  width={240}
                  height={400}
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                />

                <CardMoviesTitle>{data.title}</CardMoviesTitle>
              </CardsWrapper>
            </Col>
          ))}
        </Row>
      )}
    </WrapperMovies>
  );
};
