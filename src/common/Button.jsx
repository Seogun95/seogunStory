import React from 'react';
import styled, { css } from 'styled-components';

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
  ${(props) => props.theme.FlexRow};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  font-size: ${(props) => props.size};

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
      background-color: ${(props) => props.theme.CL.mint};
    `}

  ${(props) =>
    props.large &&
    css`
      width: 12.5rem;
      height: 3.125rem;
      background-color: ${(props) => props.theme.CL.mint};
    `}
    ${(props) =>
    props.custom &&
    css`
      width: 100%;
      background-color: ${(props) => props.theme.CL.mint};
    `}
    ${(props) =>
    props.meta &&
    css`
      color: ${(props) => props.theme.CL.pastelYellow};
      font-size: ${(props) => props.theme.FS.m};
    `}


    & {
    cursor: pointer;
  }

  &:active,
  &:hover {
    opacity: 0.9;
  }
`;
