import React, { Component } from 'react';
import AllSitesMap from './sites/AllSitesMap';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class LandingPage extends Component {

  render() {

    const { sites } = this.props;

    return (
      <div className="container-fluid">
        <section id="landing" className="App-header tc pv4 pv5-ns">
          {/* <img src={`http://tachyons.io/img/logo.jpg`} className="App-logo br-100 pa1 ba b--black-10 h3 w3" alt="avatar" /> */}
          <h1 className="fw1">ArchaeoApp</h1>
          <h2 className="f6 fw2 ttu tracked">A social app for archaeology nerds, built with ReactJS.</h2>
        </section>

        <section id="about" className="vh-100">
          <div className="dtc v-mid white w-70">
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