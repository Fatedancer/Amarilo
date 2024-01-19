import { useState } from 'react';
import { TopNavbarProps } from '../Header';

export const useHeader = (): TopNavbarProps => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

 

  const items = [
    {
      label:    'Home',
      onClick: () => setActiveIndex(0),
      isActive: activeIndex === 0,
    },
    {
      label: 'About',
      onClick: () => setActiveIndex(1),
      isActive: activeIndex === 1,
    },
  ];


  return {
    items,
  };
};