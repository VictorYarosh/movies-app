import styled from 'styled-components';

export const MoviesPageWrapper = styled.div`
  display: flex;
  padding-top: 50px;
  flex-direction: column;
`;

export const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GroupLinks = styled.div`
  height: 55px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 30px;
`;

export const LinksBtn = styled.button`
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: none;
  padding: 5px 30px;

  &:hover {
    color: white;
    background-color: #7b6ef6;
    transform: scale(1.1);
    border-radius: 8px;
  }
`;

export const LinksBtnCarousel = styled(LinksBtn)`
  font-size: 16px;
  letter-spacing: 1px;
  color: #8e95a9;
`;
