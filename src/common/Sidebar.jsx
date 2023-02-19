import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  background-color: ${(props) => props.theme.CL.dark_3};
  box-shadow: 4px 0px 5px 0px rgb(0 0 0 / 76%);
  width: 18rem;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export default function Sidebar() {
  return <SidebarWrapper></SidebarWrapper>;
}
