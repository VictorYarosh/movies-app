import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px;

  border-radius: 12px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  height: auto;
`;
export const Button = styled.button`
  padding: 10px 30px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background: #7b6ef6;
  color: white;
  border-radius: 10px;
`;
export const ButtonToggle = styled(Button)<{ active: any }>`
  background: ${(props) => (props.active ? '#7b6ef6' : 'transparent')};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #7b6ef6;
    color: white;
  }
`;
