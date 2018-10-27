import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import SiteMap from './SiteMap'

import './SiteDetails.scss'

const SiteDetails = (props) => {

    const { site, auth } = props

    // console.log('Site details props: ', props);
    if(!auth.uid) return <Redirect to='/signin' />;

    if (site){
      return (
        <section id="site-details" className="d-flex align-items-start justify-content-center">
          <div className='container-fluid'>
            <div className="row">
              <div className="col site-map">
                <SiteMap site={site} />
              </div>
            </div>
            <div className="row">
              <div className="col site-info">
                  <h2 className=''>{site.siteName}</h2>
                  <p className=''>{site.description}</p>
                  <div className="">
                    Oct 22, 22:23
                  </div>
              </div>
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <div className="container">
          <p>Loading archaeo site...</p>
        </div>
      )
    }

}
const mapStateToProps = (state, ownProps) => {
  // console.log('State: ', state);
  const id = ownProps.match.params.id
  const sites = state.firestore.data.sites
  const site = sites ? sites[id] : null

  return {
    site: site,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'sites'}
  ])
)(SiteDetails)
