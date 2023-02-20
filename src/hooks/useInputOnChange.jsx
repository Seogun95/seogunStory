import { useState, useCallback } from 'react';

const useInputOnChange = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const setStateHandler = useCallback((e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  return [state, setStateHandler];
};

export default useInputOnChange;
