import Image from 'next/image';
import styled from 'styled-components';

export const Loading = styled.div``;
export const WrapperMovies = styled.div`
  padding-bottom: 75px;
`;

export const AllMovies = styled.div`
  display: flex;
  color: #767e94;
  letter-spacing: -0.02em;
`;
export const AllMoviesTitle = styled.p`
  font-weight: 600;
  font-size: 32px;
`;

export const AllMoviesTitleDes = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding: 20px 5px;
  font-weight: 400;
  font-size: 18px;
`;

export const CardsWrapper = styled.div`
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(40px);
  margin: 10px 0;
  border-radius: 8px;
`;

export const CardAverageWrapper = styled.div`
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  gap: 4px;
  position: absolute;
  margin: 18px 16px;
`;

export const CardAverageStar = styled.div`
  color: #ffad49;
  margin: 0 5px;
`;

export const CardAverage = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffad49;
  margin: 10px;
`;

export const CardMoviesImage = styled(Image)`
  margin: 8px;
  border-radius: 12px;
`;
export const CardMoviesTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  p {
    display: contents;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: white;
    background: none;
  }
`;
