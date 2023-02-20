import { useRef, useEffect } from 'react';

function useInputAutoFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return inputRef;
}

export default useInputAutoFocus;
