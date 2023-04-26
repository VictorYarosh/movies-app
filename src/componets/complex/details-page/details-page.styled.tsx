import Image from 'next/image';
import styled from 'styled-components';

export const WrapperBigPoster = styled.div`
  padding: 40px 0;
`;
export const BigPoster = styled(Image)`
  border-radius: 40px;
  width: 100%;
  height: 480px;
  position: absolute;
`;

export const NameBlock = styled.div`
  background-color: blue;
  width: 50%;
  height: 50px;
  position: relative;
`;
export const Breadcrumbs = styled.ul`
  list-style: none;
  padding: 0;
  & > li:after {
    content: '${(props) => props.separator || '/'}';
    padding: 0 8px;
  }
`;

export const Crumb = styled.li`
  display: inline-block;

  &:last-of-type:after {
    content: '';
    padding: 0;
  }

  a {
    color: green;
    text-decoration: none;
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
`;
