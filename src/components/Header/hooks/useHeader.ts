import { useState, useCallback } from 'react';
import { TopNavbarProps } from '../Header';

export const useHeader = (): TopNavbarProps => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const handleMouseEnter = useCallback((index: number | undefined) => {
    setActiveIndex(index);
  }, []);

  const items = [
    {
      label:    'Home',
      onClick: () => console.log('Home clicked'),
      isActive: activeIndex === 0,
    },
    {
      label: 'About',
      onClick: () => console.log('About clicked'),
      isActive: activeIndex === 1,
    },
  ];


  return {
    items,
    onMouseEnter: handleMouseEnter,
  };
};