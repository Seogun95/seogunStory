import React from 'react';
import styled from 'styled-components';
import Sidebar from '../common/Sidebar';
import Footer from '../common/Footer';
import Header from '../common/Header';

const MainWrapper = styled.main`
  ${(props) => props.theme.FlexRow};
  background-color: ${(props) => props.theme.CL.dark_2};
  width: calc(100% - 18rem);
  height: calc(100vh - 9.375rem);
  margin-left: 18rem;
  margin-top: 3.125rem;
`;

const BodyWrapper = styled.div`
  height: 100%;
`;

function Layout({ children }) {
  return (
    <BodyWrapper>
      <Header />
      <Sidebar />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </BodyWrapper>
  );
}

export default Layout;
