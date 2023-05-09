import Link from 'next/link';
import React, { useState } from 'react';

import { ButtonGroup, ButtonToggle } from './button.styled';

const types = ['All', 'Movies', 'TV-Shows'];

const ToggleGroup = () => {
  const [active, setActive] = useState(types[0]);
  return (
    <ButtonGroup>
      {types.map((type) => (
        <Link key={type} href={type === 'All' ? '/' : `/${type.toLowerCase()}`}>
          <ButtonToggle active={active === type} onClick={() => setActive(type)}>
            {type}
          </ButtonToggle>
        </Link>
      ))}
    </ButtonGroup>
  );
};

export default ToggleGroup;
