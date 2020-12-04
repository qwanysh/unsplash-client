import { useState, useEffect } from 'react';

const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollTop(scrollY < prevScrollY);
    setPrevScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return scrollTop;
};

export default useScrollTop;
