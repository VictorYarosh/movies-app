import Image from 'next/image';
import React, { FC } from 'react';

import AverageStar from '../../../assets/images/icons/star.png';
import LoadingSpinner from '../../../assets/images/lodiang-spiner.svg';
import {
  AllMovies,
  AllMoviesTitle,
  AllMoviesTitleDes,
  CardAverage,
  CardAverageStar,
  CardAverageWrapper,
  CardMovies,
  CardMoviesImage,
  CardMoviesTitle,
  CardMoviesWrapper,
  Lodiang,
  WrapperMovies,
} from './movies-page.styled';
import useMoviesCards from './use-movies-cards';

export const MoviesCards: FC = () => {
  const { data, isLoading, handleOnSubmit } = useMoviesCards();
  return (
    <>
      <WrapperMovies>
        <AllMovies>
          <AllMoviesTitle>All</AllMoviesTitle>
          <AllMoviesTitleDes>({data?.total_pages})</AllMoviesTitleDes>
        </AllMovies>
        {isLoading ? (
          <Lodiang>
            <Image src={LoadingSpinner} alt="" />
          </Lodiang>
        ) : (
          <CardMoviesWrapper>
            <CardMovies>
              <CardAverageWrapper>
                <CardAverageStar>
                  <Image src={AverageStar} alt="" width={24} height={24} />
                </CardAverageStar>
                <CardAverage>{data?.results[0].vote_average}</CardAverage>
              </CardAverageWrapper>

              <CardMoviesImage
                alt=""
                width={250}
                height={400}
                src={`https://image.tmdb.org/t/p/w500${data?.results[0].poster_path}`}
              />

              <CardMoviesTitle>{data?.results[0].original_title}</CardMoviesTitle>
            </CardMovies>
          </CardMoviesWrapper>
        )}
      </WrapperMovies>
    </>
  );
};
