import styled from "styled-components";

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
