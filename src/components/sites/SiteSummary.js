import React from 'react';
import Card from '../layout/Card';
import { Link } from 'react-router-dom'

const SiteSummary = ({ site }) => {

  return (
    <Link to={'/site/' + site.id} className="col col-lg-6">
      <Card classes="card">
          <img src={`https://picsum.photos/300/200?image=105${site.id}`} alt={site.siteName} />
          <h2>{site.siteName}</h2>
          <span>{site.location}</span>
          <p>{site.description}</p>
      </Card>
    </Link>
  );
}

export default SiteSummary;