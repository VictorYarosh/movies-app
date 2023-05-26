import { Text } from 'react-uforms';
import styled from 'styled-components';

export const SearchButton = styled.button`
  padding: 20px 15px;
  position: absolute;
  cursor: pointer;
  background: #121829;
  border: none;
  border-radius: 12px;
`;

export const SearchText = styled(Text)`
  background: #121829;
  width: 100%;
  height: 64px;
  padding: 0 0 0 65px;
  border: none;
  color: white;
  border-radius: 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;
export const SearchInput = styled.div`
  border-radius: 12px;
  margin: 10px 0 40px 0;
  border: 1px solid #323b54;
`;

export const SearchIconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;
