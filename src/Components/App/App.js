import Header from '../Header/Header';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Error from '../Error/Error';
import React, { useEffect, useState } from 'react';
import Contact from '../Contact/Contact';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
      <div className="App">
        <Header /> 
        <Switch> 
          <Route 
            exact 
            path='/'
            render={() => (
              <Home />
            )}
          />
          <Route 
            exact 
            path='/:projects/'
            render={() => (
              <Projects />
            )}
          />
          <Route 
            exact 
            path='/contact/'
            render={() => (
              <Contact />
            )}
          />
          <Route
            path='*'
            render={() => (
              <Error />
            )}
          />
        </Switch>
      </div>
  );
}

export default App;
