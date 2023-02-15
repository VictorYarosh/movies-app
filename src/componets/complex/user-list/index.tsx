import React from "react";

import { UsersListWrapper } from "./user-list.styled";
import MoviesPage from "../../ui/movies-page";

const UsersList = () => {
  return (
    <UsersListWrapper>
      <MoviesPage />
    </UsersListWrapper>
  );
};
export default UsersList;
