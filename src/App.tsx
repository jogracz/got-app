import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import {AppProvider} from './context/AppContext';
import MainPage from './pages/Main';
import HousePage from './pages/House';
import { white, grey } from './style/colors';

export interface ParamTypes {
  houseId: string;
}

const AppWrapper = styled.div`
  color: ${grey};
  min-height: 100vh;
  background-color: ${white};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media(min-width: 800px) {
    padding: 50px;
  }
`

const App = () => {
  return (
    <AppProvider>
      <Router>
        <AppWrapper>
          <Switch>
            <Route path='/' exact>
              <MainPage />
            </Route>
            <Route path='/houses/:houseId'>
              <HousePage />
            </Route>
          </Switch>
        </AppWrapper>
      </Router>
    </AppProvider>
  );
}

export default App;
