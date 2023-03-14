import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { Form, Text } from 'react-uforms';

import SearchIcon from '../../../assets/images/icons/search-normal.png';
import { GroupLinks, LinksBtnCarousel } from '../movies-cards/movies-page.styled';
import { LinksBtn, LinksWrapper } from '../navbar/navbar.styled';
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
      <GroupLinks>
        <LinksWrapper>
          <LinksBtnCarousel>
            All
            <Link href="/"></Link>
          </LinksBtnCarousel>
          <LinksBtn>
            MoviesList
            <Link href="/movies-list"></Link>
          </LinksBtn>
          <LinksBtn>
            TV Shows
            <Link href="/"></Link>
          </LinksBtn>
        </LinksWrapper>
      </GroupLinks>
    </>
  );
};
export default Search;
