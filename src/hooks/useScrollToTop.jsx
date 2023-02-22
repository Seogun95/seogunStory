import { useEffect, useRef } from 'react';

export default function useScrollToTop() {
  const topRef = useRef(null);

  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return topRef;
}
