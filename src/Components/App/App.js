import Header from '../Header/Header';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-scroll';
// import { HashLink } from 'react-router-hash-link';
import Contact from '../Contact/Contact';
import { Route, Switch } from 'react-router-dom';
import '../../styles/desktop/App.css';

const App = () => {
  return (
      <div className="App">
        <Header /> 
        <Switch> 
          <Route
            exact
            path='/'
            render={() => {
              return (
                <Home />
              )
            }}
          />
          <Route
            exact
            path='/portfolio/'
            render={() => {
              return (
                <Portfolio />
              )
            }}
          />
          <Route
            exact
            path='/contact/'
            render={() => {
              return (
                <Contact />
              )
            }}
          />
          <Route
            exact
            path='*'
            render={() => {
              return (
                <Error />
              )
            }}
          />
          </Switch>
          <Footer />
      </div>
  );
}

export default App;
