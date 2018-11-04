import React, { Component } from 'react';
import AllSitesMap from './sites/AllSitesMap';
import ScrollReveal from 'scrollreveal'
import scrollReveals from './behaviour/scripts'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Header from './layout/Header'

import './Landing.scss'

class LandingPage extends Component {

  // TODO: Need to delay loading of the map to speed up this page

  componentDidMount() {
    ScrollReveal().reveal(scrollReveals[1].selector, scrollReveals[1].options);
    ScrollReveal().reveal(scrollReveals[0].selector, scrollReveals[0].options);
    ScrollReveal().reveal(scrollReveals[3].selector, scrollReveals[3].options);
  }


  render() {

    const { sites } = this.props;

    return (
      <div className="wrapper">
          <Header id="home">
            {/* <img src={`http://tachyons.io/img/logo.jpg`} className="App-logo br-100 pa1 ba b--black-10 h3 w3" alt="avatar" /> */}
            <h1>ArchaeoApp</h1>
            <p className="intro tracked">A social app for archaeology nerds, built with ReactJS.</p>
          </Header>

          <section id="about" className="d-flex align-items-center justify-content-center">
            <div className="container scale-up-subtle">
              <h2>Archaeology made social</h2>
              <p className="lead">ArchaeoApp is a tool for archaeology fans. Document, share and discover archaeological sites wherever you are in the world.  </p>
              <p>ArchaeoApp was born from a passion for archaeology and the lack of somewhere central to put all of our knowledge, photos and research on sites that we'd visited. So, being a web developer by trade, I decided to build a simple app to enable us to document all of this interesting stuff. Well, that simple app has bigger plans now and if you're in to archaeology and like to document your adventures and experiences, then watch this space! :)</p>
            </div>
          </section>
          <section id="sites" className="main vh-100 sr-item">
            <AllSitesMap sites={sites} />
          </section>
      </div>

    );
  }

}

const mapStateToProps = (state) => {
  // console.log('State: ',state);
  return {
    sites: state.firestore.ordered.sites
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'sites' }
  ])
)(LandingPage)