import React, { FC, PropsWithChildren } from "react";

import { LayoutStyled } from "./layout.styled";
import Navbar from "../../ui/navbar";

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <LayoutStyled>
    <Navbar />
    {children}
  </LayoutStyled>
);
