import styled from "styled-components";
import Image from "next/image";

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
  margin: 7px 0 15px 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: white;
  background: none;
`;
