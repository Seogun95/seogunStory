import React from 'react';
import Router from './shared/Router';
import { ThemeProvider } from 'styled-components';
import {
  CL,
  FW,
  FS,
  BR,
  FlexRow,
  FlexCol,
  DarkBlur,
  AbsoluteCenter,
} from './style/Theme';

function App() {
  const theme = {
    FlexRow,
    FlexCol,
    AbsoluteCenter,
    DarkBlur,
    CL,
    FW,
    FS,
    BR,
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
