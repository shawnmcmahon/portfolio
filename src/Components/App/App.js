import Header from '../Header/Header';
import Home from '../Home/Home';
import Project from '../Project/Project';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
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
            //Home Component here
            <Home />
          )}
        />
        <Route 
          exact 
          path='/:project/'
          render={() => (
            //Home Component here
            <Project />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
