import Image from 'next/image';

import AverageStar from '../../../assets/images/icons/star.png';
import CardImage from '../../../assets/images/poster/Black-Widow-Box-Office.png';
import { TitleDescription } from '../content-title/content-title.styled';
import { CardAverage, CardAverageStar } from '../movies-cards/movies-page.styled';
import { CardImages, InformCard, TitleCArd, WrapperMoviesCard } from './main-card.styled';

const MainCard = () => {
  // const { data, isLoading } = useMoviesCards();

  return (
    <>
      <WrapperMoviesCard>
        <CardImages src={CardImage} alt="Black-Widow" />
        <InformCard>
          <TitleCArd>Part of the journey is the end.</TitleCArd>
          <TitleDescription>
            After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the
            Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo
            actions and restore order to the universe once and for all, no matter what consequences may be in store.
          </TitleDescription>

          <CardAverageStar>
            <Image src={AverageStar} alt="" width={24} height={24} />
          </CardAverageStar>
          <CardAverage></CardAverage>
        </InformCard>
      </WrapperMoviesCard>
    </>
  );
};
export default MainCard;
