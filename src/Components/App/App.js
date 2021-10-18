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
            render={() => {
              return (
                <Home />
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
            path='/contact/'
            render={() => {
              return (
                <Contact />
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
          </Switch>
      </div>
  );
}

export default App;
