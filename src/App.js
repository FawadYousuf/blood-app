import React, { Component } from 'react';
import {Router, Route, IndexRoute, Link, browserHistory } from "react-router";
import refooter from './footer.js';
import login from './login.js';
import signup from './signup.js';
import home from './home.js';
import logo from './logo.svg';
import './App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
// import FontIcon from 'material-ui/FontIcon';
// import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
// import Paper from 'material-ui/Paper';
// import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
// const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
// const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
// const nearbyIcon = <IconLocationOn />;



class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <header>
            <AppBar
              className='titlebar'
              color=''
              title="BLOOD APP"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          </header>

          <Router history={browserHistory}>
            {/*<IndexRoute path='/' Component={App}>*/}
            <Route path='/' Component={App}></Route>
            <Route path='/login' Component={login}></Route>
            <Route path='/signup' Component={signup}></Route>
            {/*</IndexRoute>*/}
          </Router>
          <Link to='login'>
            <RaisedButton label="Signup" className='btnsp' />
          </Link>
          <Link to='signup'>
            <RaisedButton label="Login" className='btnsp' />
          </Link>
        </div>
        <div>
          <refooter />
        </div>
      </div>
    );
  }
}

export default App;
