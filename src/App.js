import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Wave } from 'react-preloading-component'
import Navigation from './components/layout/Navigation'
import Dashboard from './components/dashboard/Dashboard'
import LandingPage from './components/Landing'
import SiteDetails from './components/sites/SiteDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateSite from './components/sites/CreateSite'

import './App.scss';

class App extends Component {
  state = {
    loading: true
  }
  componentDidMount() {
    var html = document.getElementsByTagName("html");
    html[0].classList.add("loaded");
    // setTimeout(() => this.setState({ loading: false }), 1500);
    this.setState({ loading: false });
  }
  render() {
    const { loading } = this.state;
    if(loading) {
      return null;
    }
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
            <Route path='/addsite' component={CreateSite} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
