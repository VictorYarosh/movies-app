import styled from "styled-components";
import { Container } from "styled-bootstrap-grid";

export const Navbar = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  backdrop-filter: blur(20px);
`;

export const Links = styled.ul`
  text-decoration: none;
  color: white;
  display: flex;
  list-style: none;
  padding: 0;

  @media (max-width: 425px) {
    margin-top: 20px;
    font-size: 15px;
  }
`;
export const LinksPage = styled.li`
  padding: 10px 25px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: #a8aebf;

  @media (max-width: 425px) {
    padding: 10px;
    font-size: 12px;
  }
`;

export const LinksWrapper = styled(Links)`
  display: flex;
  justify-content: space-between;
  padding: 8px;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 12px;
`;

export const LinksBtn = styled.li`
  display: flex;
  text-align: center;
  align-items: center;

  height: 40px;
  border-radius: 8px;
  padding: 0 20px;
`;
