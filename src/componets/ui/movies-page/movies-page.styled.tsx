import styled from "styled-components";
import { Container, Col } from "styled-bootstrap-grid";

export const MoviesPageWrapper = styled(Container)`
  display: flex;
`;
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
`;

export const SearchInput = styled.div`
  input {
    width: 85%;
    height: 30px;
    margin: 5px 3px;
    border: none;
    color: white;
    border-radius: 10px;
    padding: 0 5px;
    background: hsl(262, 80%, 25%, 0.3);
  }
  button {
    border: 1px;
    height: 32px;
    width: 10%;
    cursor: pointer;
    background: hsl(262, 80%, 25%, 0.3);
    border-radius: 10px;
  }
`;
export const SearchIconWrapper = styled.img`
  width: 15px;
  height: 15px;
  margin: -1px;
`;
