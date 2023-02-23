import React from 'react';
import {
  LoginLabel,
  LoginInput,
  LoginInsideLabel,
  LoginInputIcon,
} from '../style/styled';

function Input(props) {
  return (
    <>
      <LoginLabel>
        <LoginInsideLabel>{props.text}</LoginInsideLabel>
        <LoginInputIcon>{props.children}</LoginInputIcon>
        <LoginInput
          value={props.value}
          onChange={props.onChange}
          type={props.type}
        ></LoginInput>
      </LoginLabel>
    </>
  );
}

export default Input;
