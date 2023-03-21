import Image from 'next/image';
import { FC } from 'react';
import { Text } from 'react-uforms';

import SearchIcon from '../../../assets/images/icons/search-normal.png';
import { SearchButton, SearchIconWrapper, SearchInput } from './search.styled';
import useSearch from './use-search';

const Search: FC = () => {
  const { handleOnClick } = useSearch();

  return (
    <SearchInput>
      <SearchButton type="button" onClick={handleOnClick}>
        <SearchIconWrapper>
          <Image src={SearchIcon} alt="searchIcon" />
        </SearchIconWrapper>
      </SearchButton>
      <Text type="text" name="search" id="search" placeholder="Search MoviesList or TV Shows" />
    </SearchInput>
  );
};
export default Search;
