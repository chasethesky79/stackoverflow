import React from 'react';
import './App.css';
import { AppWrapper, GlobalStyle } from './styled-components/styled-components';
import { Header } from './components/Header';

function App() {
  return (
    <>
    <GlobalStyle/>
    <AppWrapper>
      <Header/>
    </AppWrapper>
    </>
  );
}

export default App;
