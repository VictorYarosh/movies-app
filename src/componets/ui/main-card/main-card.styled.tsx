import Image from 'next/image';
import styled from 'styled-components';

export const WrapperMoviesCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0;
`;

export const CardImages = styled(Image)`
  border-radius: 24px;
`;

export const InformCard = styled.div`
  padding: 0 80px;
`;

export const TitleCArd = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.015em;
  margin: 0;

  color: #ebeef5;
`;
