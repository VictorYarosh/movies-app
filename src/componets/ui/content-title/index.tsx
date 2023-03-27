import React from 'react';

import { Title, TitleDescription, TitleWrapper } from './content-title.styled';

const ContentTitle = () => {
  return (
    <TitleWrapper>
      <Title>MaileHereko</Title>
      <TitleDescription>
        List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and also feel
        free to make a suggestion. 😉
      </TitleDescription>
    </TitleWrapper>
  );
};
export default ContentTitle;
