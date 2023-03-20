import Image from 'next/image';
import React, { FC } from 'react';

import AverageStar from '../../../assets/images/icons/star.png';
import LoadingSpinner from '../../../assets/images/lodiang-spiner.svg';
import { Column } from '../../complex/movies-page/movies-page.styled';
import {
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
  const { data, isLoading } = useMoviesCards();
  return (
    <WrapperMovies>
      {isLoading ? (
        <Lodiang>
          <Image src={LoadingSpinner} alt="" />
        </Lodiang>
      ) : (
        <CardMoviesWrapper>
          {data.results.map((data) => (
            <CardMovies key={data.id}>
              <Column xl={4}>
                <CardAverageWrapper>
                  <CardAverageStar>
                    <Image src={AverageStar} alt="" width={24} height={24} />
                  </CardAverageStar>
                  <CardAverage></CardAverage>
                </CardAverageWrapper>

                <CardMoviesImage
                  alt=""
                  width={250}
                  height={400}
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                />

                <CardMoviesTitle></CardMoviesTitle>
              </Column>
            </CardMovies>
          ))}
        </CardMoviesWrapper>
      )}
    </WrapperMovies>
  );
};
