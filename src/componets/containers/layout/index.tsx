import React, { FC, PropsWithChildren } from 'react';

import Navbar from '../../ui/navbar';
import { LayoutStyled } from './layout.styled';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <LayoutStyled>
    <Navbar />
    {children}
  </LayoutStyled>
);
