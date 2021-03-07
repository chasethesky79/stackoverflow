import React from 'react';
import './App.css';
import { AppWrapper, GlobalStyle } from './styled-components/styled-components';
import { Header } from './components/Header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Feed from './components/Feed';

function App() {
  return (
    <>
    <GlobalStyle/>
    <AppWrapper>
      <Header/>
      <Router>
        <div>
          <Switch>
           <Route exact path='/' component={Feed}/>
        </Switch>
       </div>
      </Router>
    </AppWrapper>
    </>
  );
}

export default App;
