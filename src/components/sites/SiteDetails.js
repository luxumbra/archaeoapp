import React from 'react'
import Card from '../layout/Card'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


const SiteDetails = (props) => {

    const { site, auth } = props

    // console.log('Site details props: ', props);
    if(!auth.uid) return <Redirect to='/signin' />;

    if (site){
      return (
        <section id="site-details">
          <div className='container project-details'>
            <div className="row">
              <div className="col site-map">
                <p>Display map here</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Card>
                  <h2 className='card-title'>{site.siteName}</h2>
                  <p className='card-text'>{site.description}</p>
                  <div className="card-footer text-muted">
                    Oct 22, 22:23
              </div>
                </Card>
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
