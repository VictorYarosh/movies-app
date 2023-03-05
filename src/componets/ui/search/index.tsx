import React from "react";
import Image from "next/image";
import { Form, Text } from "react-uforms";

import useSearch from "./use-search";
import { SearchIconWrapper, SearchInput } from "../search/search.styled";

import SearchIcon from "../../../assets/images/icons/search-normal.png";

const Search = () => {
  const { handleOnSubmit } = useSearch();
  return (
    <>
      <SearchInput>
        <Form onSubmit={handleOnSubmit}>
          <button type="submit">
            <SearchIconWrapper>
              <Image src={SearchIcon} alt="searchIcon" />
            </SearchIconWrapper>
          </button>
          <Text
            type="text"
            name="search"
            id="search"
            placeholder="Search MoviesList or TV Shows"
          />
        </Form>
      </SearchInput>
    </>
  );
};
export default Search;
