import React from 'react';
import GlobalStyles from './styles/global';
import styled, { ThemeProvider } from 'styled-components';

import quero from '../src/styles/themes/quero';

const Container = styled.div`
  height: 500px;
  width: 500px;
  background-color: ${props => props.theme.secondaryBlue};
`;

function App() {
  return (
    <ThemeProvider theme={quero}>
      <GlobalStyles />
      <Container data-test="div-component">
        <h1>sasa</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
