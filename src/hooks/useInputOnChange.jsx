import { useState, useCallback } from 'react';

// 기존의 js에서 ts로 변경되어서 type오류 발생
// 우선 any로 처리
const useInputOnChange = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const setStateHandler = useCallback((e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  const reset = () => {
    setState(initialValue);
  };
  return [state, setStateHandler, reset];
};

export default useInputOnChange;
