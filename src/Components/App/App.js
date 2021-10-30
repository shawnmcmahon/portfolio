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
import '../../styles/desktop/App.scss';

const App = () => {
  const [pageMode, setPageMode] = useState(localStorage.getItem('pageMode') || 'Light Mode');

  const handleStyleSwitch = (event) => {
    if (event.target.value === 'Light Mode') {
      setPageMode('Dark Mode')
      localStorage.setItem('pageMode', 'Dark Mode')
    } else if (event.target.value === 'Dark Mode'){
      setPageMode('Light Mode')
      localStorage.setItem('pageMode', 'Light Mode')
    }
  }

  return (
      <div className="App">
        <Header pageMode={pageMode} handleStyleSwitch={handleStyleSwitch} /> 
        <Switch> 
          <Route
            exact
            path='/'
            render={() => {
              return (
                <Home pageMode={pageMode} />
              )
            }}
          />
          <Route
            exact
            path='/portfolio/'
            render={() => {
              return (
                <Portfolio pageMode={pageMode}/>
              )
            }}
          />
          <Route
            exact
            path='/contact/'
            render={() => {
              return (
                <Contact pageMode={pageMode}/>
              )
            }}
          />
          <Route
            exact
            path='*'
            render={() => {
              return (
                <Error pageMode={pageMode}/>
              )
            }}
          />
          </Switch>
          <Footer />
      </div>
  );
}

export default App;
