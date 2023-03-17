import Image from 'next/image';
import styled from 'styled-components';

export const Lodiang = styled.div``;

export const GroupLinks = styled.div``;
export const WrapperMovies = styled.div``;

export const LinksBtnCarousel = styled.li`
  display: flex;
  font-size: 16px;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  background: ${(props) => (props ? '#7B6EF6' : 'white')};
  border-radius: 8px;
  padding: 0 40px;
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

export const CardMoviesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 80px;
`;

export const CardMovies = styled.div`
  background: rgba(32, 40, 62, 0.8);
  border-radius: 12px;

  > * {
    &:nth-last-child {
      margin-right: 24px;
    }
  }
`;
export const CardMoviesImage = styled(Image)`
  margin: 8px;
  border-radius: 12px;
`;
export const CardMoviesTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: white;
  background: none;
  margin: 15px;
`;
