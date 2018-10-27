import React from 'react';
import Card from '../layout/Card';
import { Link } from 'react-router-dom'

import './SiteSummary.scss'

const SiteSummary = ({ site }) => {

  return (
    <Link to={'/site/' + site.id} className="col col-lg-8">
      <Card classes="card">
          {/* <img src={`https://picsum.photos/300/200?image=105${site.id}`} alt={site.siteName} /> */}
          <div className="card-header">
            <h2>{site.siteName}</h2>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><span>Location:</span> <span>{site.location}</span></li>
          <li className="list-group-item"><span>Date added:</span> <span>{site.createdAt.toDate().toString()}</span></li>
          </ul>
          <div className="card-body">
            <p className="card-text">{site.description}</p>
          </div>
      </Card>
    </Link>
  );
}

export default SiteSummary;