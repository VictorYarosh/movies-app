import styled from "styled-components";
import { Container, Col } from "styled-bootstrap-grid";
import Image from "next/image";
// import bg from "../../../assets/images/background.png";

export const MoviesPageWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

//background-image: url(${bg.src})

export const Column = styled(Col)`
  display: flex;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  color: #ebeef5;
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;
`;

export const TitleDescription = styled.p`
  color: #8e95a9;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 0 0 14px 0;
`;

export const SearchInput = styled.div`
  width: 55%;
  padding-bottom: 50px;

  form {
    background: rgba(0, 0, 0, 0.1);
    border: 2px solid #323b54;
    border-radius: 12px;
  }

  button {
    padding: 20px;
    position: absolute;
    cursor: pointer;
    background: #121829;
    border: none;
    border-radius: 12px;
  }
  input {
    width: 100%;
    height: 64px;
    padding: 0 65px;
    border: none;
    color: white;
    border-radius: 10px;

    background: #121829;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
`;
export const SearchIconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

export const GroupLinks = styled.div`
  width: 60%;
`;

export const LinksBtnCarousel = styled.li`
  display: flex;
  align-items: center;
  font-size: 1em;
  //padding: 8px 0;
  padding: 0.25em 1em;
  color: ${({ theme }) => theme.colors.secondary};
  background: ${(props) => (props ? "#7B6EF6" : "white")};
  border-radius: 8px;
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
export const CardMoviesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 80px;
`;

export const CardMovies = styled.div`
  background: rgba(32, 40, 62, 0.8);
  border-radius: 12px;
  padding: 8px 8px 25px 8px;

  > * {
    &:nth-last-child {
      margin-right: 24px;
    }
  }
`;
export const CardMoviesImage = styled(Image)`
  border-radius: 12px;
`;
export const CardMoviesTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: white;
  background: none;
`;
