import styled from "styled-components";
import { Container, Col } from "styled-bootstrap-grid";

export const MoviesPageWrapper = styled(Container)`
  display: flex;
  padding-top: 50px;
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
  padding: 0 0 14px 0;
`;

export const SearchInput = styled.div`
  width: 75%;
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
  display: flex;
`;

export const PurpleLink = styled.a`
  background-color: #7b6ef6;
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
`;
