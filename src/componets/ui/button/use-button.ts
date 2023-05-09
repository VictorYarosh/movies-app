import { useState } from 'react';

import { ToggleGroupProps } from './types';

const useToggleGroup = ({ types }: ToggleGroupProps) => {
  const [active, setActive] = useState(types[0]);

  return { active, setActive };
};
export default useToggleGroup;
