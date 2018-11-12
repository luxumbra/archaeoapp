import React from 'react';
import Moment from 'react-moment'
import Card from '../layout/Card'
import { Link } from 'react-router-dom'

import './SiteSummary.scss'

const SiteSummary = ({ site }) => {

  const siteAdded = site.createdAt.toDate()

  return (
    <Link to={'/site/' + site.id} className="col col-lg-6">
      <Card classes="card">
          {/* <img src={`https://picsum.photos/300/200?image=105${site.id}`} alt={site.siteName} /> */}
          <div className="card-header">
            <h2>{site.siteName}</h2>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><span>Location:</span> <span>{site.location}</span></li>
          <li className="list-group-item"><span>Date added:</span> <span><Moment format="DD/MM/YYYY" date={siteAdded} /></span></li>
          </ul>
          {/* <div className="card-body">
            <p className="card-text">{site.summary}</p>
          </div> */}
      </Card>
    </Link>
  );
}

export default SiteSummary;