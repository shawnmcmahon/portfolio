import Header from '../Header/Header';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
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
            path='/projects/'
            render={() => {
              return (
                <Projects />
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
          <Footer />
      </div>
  );
}

export default App;
