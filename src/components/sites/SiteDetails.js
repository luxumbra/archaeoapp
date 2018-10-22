import React, { Component } from 'react'
import Card from '../layout/Card'

const SiteDetails = (props) => {

    return (
      <div classname='container project-details'>
        <div className="row">
          <div className="col site-map">
            <p>Display map here</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Card>
              <h2 className='card-title'>Site name</h2>
              <p className='card-text'>Site desc</p>
              <div className="card-footer text-muted">
                Oct 22, 22:23
            </div>
            </Card>
          </div>
        </div>
      </div>
    )
}

export default SiteDetails
