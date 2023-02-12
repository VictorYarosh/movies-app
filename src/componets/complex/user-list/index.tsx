import React from "react";

import { UsersListWrapper } from "./user-list.styled";
import MoviesPage from "../../ui/movies-page";

export default function UsersList() {
  return (
    <UsersListWrapper>
      <MoviesPage />
    </UsersListWrapper>
  );
}
