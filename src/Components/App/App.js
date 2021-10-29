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
  const [pageStyle, setPageStyle] = useState(localStorage.getItem('pageStyle') || 'Light Mode');

  const handleStyleSwitch = (event) => {
    if (event.target.value === 'Light Mode') {
      setPageStyle('Dark Mode')
      localStorage.setItem('pageStyle', 'Dark Mode')
    } else if (event.target.value === 'Dark Mode'){
      setPageStyle('Light Mode')
      localStorage.setItem('pageStyle', 'Light Mode')
    }
  }

  return (
      <div className="App">
        <Header pageStyle={pageStyle} handleStyleSwitch={handleStyleSwitch} /> 
        <Switch> 
          <Route
            exact
            path='/'
            render={() => {
              return (
                <Home pageStyle={pageStyle} />
              )
            }}
          />
          <Route
            exact
            path='/portfolio/'
            render={() => {
              return (
                <Portfolio pageStyle={pageStyle}/>
              )
            }}
          />
          <Route
            exact
            path='/contact/'
            render={() => {
              return (
                <Contact pageStyle={pageStyle}/>
              )
            }}
          />
          <Route
            exact
            path='*'
            render={() => {
              return (
                <Error pageStyle={pageStyle}/>
              )
            }}
          />
          </Switch>
          <Footer />
      </div>
  );
}

export default App;
