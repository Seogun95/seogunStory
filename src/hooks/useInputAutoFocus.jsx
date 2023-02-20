import { useRef, useEffect } from 'react';

function useInputAutoFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [inputRef]);
  console.log(inputRef.current);
  return inputRef;
}

export default useInputAutoFocus;
