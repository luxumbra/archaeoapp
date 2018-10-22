import React from 'react';

import AllSitesMap from './sites/AllSitesMap';
import { sites } from '../data/sites';


const LandingPage = () => {
  return (
    <div>
      <section id="landing" className="App-header tc pv4 pv5-ns">
        {/* <img src={`http://tachyons.io/img/logo.jpg`} className="App-logo br-100 pa1 ba b--black-10 h3 w3" alt="avatar" /> */}
        <h1 className="fw1">ArchaeoApp</h1>
        <h2 className="f6 fw2 ttu tracked">A social app for archaeology nerds, built with ReactJS.</h2>
      </section>

      <section id="about" className="tc dt pv4 vh-100 w-100 pv5-ns">
        <div className="dtc v-mid white w-70">
          <h2>Archaeology made social</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eos. Dolor repellat, repellendus quas laborum ea ratione quibusdam, laboriosam doloremque eum, modi voluptate eligendi atque nihil. Non culpa sint eveniet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dignissimos, qui. Ab ipsum voluptatum enim, alias excepturi fugit provident velit corporis illo facere vel nisi atque laborum sit, adipisci quod!</p>
        </div>
      </section>

      <section id="sites" className="main vh-100">
        <AllSitesMap sites={sites}  />
      </section>
    </div>
  );
}

export default LandingPage;