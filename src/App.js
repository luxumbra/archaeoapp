import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap/lib'
import Navigation from './components/layout/Navigation'
import Dashboard from './components/dashboard/Dashboard'
import LandingPage from './components/Landing'
import SiteDetails from './components/sites/SiteDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/site/:id' component={SiteDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
