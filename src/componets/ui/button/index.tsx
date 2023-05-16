import Link from 'next/link';
import React, { useState } from 'react';

import { ButtonGroup, ButtonToggle } from './button.styled';

const ToggleGroup = () => {
  const [active] = useState();
  return (
    <ButtonGroup role="group" aria-label="Basic checkbox toggle button group">
      <ButtonToggle active={active}>
        {' '}
        <Link href="/" passHref>
          All
        </Link>
      </ButtonToggle>
      <ButtonToggle active={active}>
        {' '}
        <Link href="/movies" passHref>
          Movies
        </Link>
      </ButtonToggle>
      <ButtonToggle active={active}>
        {' '}
        <Link href="/tv-shows" passHref>
          TV-Shows
        </Link>
      </ButtonToggle>
    </ButtonGroup>
  );
};

export default ToggleGroup;
