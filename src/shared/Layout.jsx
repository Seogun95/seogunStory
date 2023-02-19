import React from 'react';
import styled from 'styled-components';
import Sidebar from '../common/Sidebar';
import Footer from '../common/Footer';

const MainWrapper = styled.main`
  ${(props) => props.theme.FlexRow};
  width: calc(100% - 18rem);
  height: 100%;
  margin: 2rem 0 2rem 18rem;
  padding-bottom: 100px;
`;

function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </div>
  );
}

export default Layout;
