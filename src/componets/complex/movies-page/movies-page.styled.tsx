import styled from 'styled-components';

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
  justify-content: space-between;
  padding: 7px;
`;

export const LinksBtn = styled.button.attrs((props) => ({
  type: props,
}))`
  padding: 10px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background: ${(props) => (props.$primary ? '#7b6ef6' : 'none')};
  color: ${(props) => (props.$primary ? 'white' : '#767e94')};
  border-radius: 10px;
`;
