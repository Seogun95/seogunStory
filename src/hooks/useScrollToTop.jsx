import { useEffect, useRef } from 'react';

function useScrollToTop() {
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current !== null) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return topRef;
}

export default useScrollToTop;
