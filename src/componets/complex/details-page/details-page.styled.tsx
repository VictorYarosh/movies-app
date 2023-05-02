import Image from 'next/image';
import styled from 'styled-components';

export const WrapperBigPoster = styled.div`
  width: 100%;
  height: auto;
  image-rendering: pixelated;
`;
export const BigPoster = styled(Image)`
  border-radius: 40px;
  width: 100%;
  height: 480px;
`;

export const NameBlock = styled.div`
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(12px);
  padding: 40px;

  border-radius: 24px;
  width: 50%;

  top: -50px;
  position: relative;
`;
export const Breadcrumbs = styled.ul`
  list-style: none;
  padding: 0;
  & > li:after {
    content: '${(props) => props.separator || '/'}';
    padding: 0 8px;
    color: #beb7fb;
  }
`;

export const Crumb = styled.li`
  display: inline-block;

  &:last-of-type:after {
    content: '';
    padding: 0;
  }

  a {
    color: #beb7fb;
    text-decoration: none;
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
`;
export const TitleMovie = styled.p`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #ebeef5;
  margin: 0;
`;
