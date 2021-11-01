import Header from '../Header/Header';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import React, { useState } from 'react';
import Contact from '../Contact/Contact';
import { Route, Switch } from 'react-router-dom';
import findStyleAndDesign from '../../findStyleAndDesign';

import '../../styles/desktop/App.scss';



import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';

const App = () => {
  const [pageMode, setPageMode] = useState(localStorage.getItem('pageMode') || 'Light Mode');
  const [pageDesign, setPageDesign] = useState(localStorage.getItem('pageDesign') || 'Flat')

  // const handleModeSwitch = (event) => {
  //   if (event.target.value === 'Light Mode') {
  //     setPageMode('Dark Mode')
  //     localStorage.setItem('pageMode', 'Dark Mode')
  //   } else if (event.target.value === 'Dark Mode'){
  //     setPageMode('Light Mode')
  //     localStorage.setItem('pageMode', 'Light Mode')
  //   }
  // }

  const handleDesignSwitch = () => {
    if (pageDesign === 'Flat') {
      setPageDesign('Neomorphism');
      localStorage.setItem('pageDesign', 'Neomorphism');
      console.log('neo')
    } else if (pageDesign === 'Neomorphism') {
      setPageDesign('Flat') 
      localStorage.setItem('pageDesign', 'Flat')
      console.log('flat')
    }
  }

  const toggleTheme = () => {
    if (pageMode === 'Light Mode') {
      setPageMode('Dark Mode');
      localStorage.setItem('pageMode', 'Dark Mode')
    } else {
      setPageMode('Light Mode');
      localStorage.setItem('pageMode', 'Light Mode')
    }
  }


  return (
    <ThemeProvider theme={lightTheme} th
    eme={pageMode === 'Light Mode' ? lightTheme : darkTheme}> 

      <div className={findStyleAndDesign(pageMode, pageDesign, "app")}>
        <GlobalStyles />
        <Header pageMode={pageMode} pageDesign={pageDesign} handleDesignSwitch={handleDesignSwitch} toggleTheme={toggleTheme} /> 
        <Switch> 
          <Route
            exact
            path='/'
            render={() => {
              return (
                <Home pageMode={pageMode} pageDesign={pageDesign} />
                )
              }}
              />
          <Route
            exact
            path='/portfolio/'
            render={() => {
              return (
                <Portfolio pageMode={pageMode} pageDesign={pageDesign}/>
                )
              }}
              />
          <Route
            exact
            path='/contact/'
            render={() => {
              return (
                <Contact pageMode={pageMode} pageDesign={pageDesign}/>
                )
              }}
              />
          <Route
            exact
            path='*'
            render={() => {
              return (
                <Error pageMode={pageMode} pageDesign={pageDesign}/>
                )
              }}
              />
          </Switch>
          <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
