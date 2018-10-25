import React, { Component } from 'react';
import AllSitesMap from './sites/AllSitesMap';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Header from './layout/Header'

class LandingPage extends Component {

  render() {

    const { sites } = this.props;
    const headerId = 'landing';
    return (
      <div className="wrapper">
        <Header>
            {/* <img src={`http://tachyons.io/img/logo.jpg`} className="App-logo br-100 pa1 ba b--black-10 h3 w3" alt="avatar" /> */}
            <h1 className="fw1">ArchaeoApp</h1>
            <p className="intro tracked">A social app for archaeology nerds, built with ReactJS.</p>
        </Header>

        <section id="about" className="d-flex align-items-center justify-content-center">
            <div className="container">
              <h2>Archaeology made social</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eos. Dolor repellat, repellendus quas laborum ea ratione quibusdam, laboriosam doloremque eum, modi voluptate eligendi atque nihil. Non culpa sint eveniet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dignissimos, qui. Ab ipsum voluptatum enim, alias excepturi fugit provident velit corporis illo facere vel nisi atque laborum sit, adipisci quod!</p>
            </div>
        </section>

        <section id="sites" className="main vh-100">
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