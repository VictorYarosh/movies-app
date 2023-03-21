import styled from 'styled-components';

export const SearchButton = styled.button`
  margin: 20px 10px;
  position: absolute;
  cursor: pointer;
  background: #121829;
  border: none;
  border-radius: 12px;
`;
export const SearchInput = styled.div`
  padding-bottom: 50px;

  input {
    width: 100%;
    height: 64px;
    padding: 0 0 0 65px;
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
