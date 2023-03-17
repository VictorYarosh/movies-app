import Image from 'next/image';
import React, { FC } from 'react';
import { Form, Text } from 'react-uforms';

import SearchIcon from '../../../assets/images/icons/search-normal.png';
import { SearchIconWrapper, SearchInput } from './search.styled';
import useSearch from './use-search';

const Search: FC = () => {
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
          <Text type="text" name="search" id="search" placeholder="Search MoviesList or TV Shows" />
        </Form>
      </SearchInput>
    </>
  );
};
export default Search;
