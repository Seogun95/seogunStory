import React from 'react';
import styled, { css } from 'styled-components';
import { FlexColumn, CL } from '../style/Theme';

export default function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

Button.defaultProps = {
  padding: '.5rem',
  margin: '.2rem',
  borderR: '.5rem',
  border: 'none',
  bg: 'transparent',
  ts: '.2s ease',
  onClick: () => {},
};

const ButtonWrapper = styled.button`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  font-size: ${(props) => props.fontSize};

  //기본 값
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderR};
  border: ${(props) => props.border};
  background-color: ${(props) => props.bg};
  transition: ${(props) => props.ts};

  ${(props) =>
    props.small &&
    css`
      width: 6.25rem;
      height: 2.5rem;
      background-color: ${(props) => props.theme.CL.mint};
    `}

  ${(props) =>
    props.middle &&
    css`
      width: 8.125rem;
      height: 2.8125rem;
      color: ${(props) => props.theme.FC.mint};
    `}

  ${(props) =>
    props.large &&
    css`
      width: 12.5rem;
      height: 3.125rem;
    `}

    & {
    cursor: pointer;
  }

  &:active,
  &:hover {
    filter: brightness(97%);
  }
`;
