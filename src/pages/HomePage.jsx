import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
const HomeWrapper = styled.div``;

function HomePage() {
  return (
    <HomeWrapper>
      안녕
      <Button small>버튼</Button>
    </HomeWrapper>
  );
}

export default HomePage;
