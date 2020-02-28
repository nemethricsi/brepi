import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import BeersPage from './features/beers/Beers';
import OrdersPage from './features/orders/Orders';
import Header from './components/Header/Header';
import { CssBaseline, Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Header />
        <div style={{minHeight: 56}} />
        <Container 
          maxWidth='sm' 
          style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        >
          <Switch>
            <Route path='/beers'>
              <BeersPage />
            </Route>
            <Route path='/orders'>
              <OrdersPage />
            </Route>
            <Route path='/'>
              <Redirect to="/beers" />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
