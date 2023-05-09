import { FC, PropsWithChildren } from 'react';
import { Container } from 'styled-bootstrap-grid';

import Navbar from '../../ui/navbar';
import { LayoutStyled } from './layout.styled';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <LayoutStyled>
    <Navbar />
    <Container>{children}</Container>
  </LayoutStyled>
);
