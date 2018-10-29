import React, { Component } from 'react'
import SiteList from '../sites/SiteList'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ScrollReveal from 'scrollreveal'
import scrollReveals from '../behaviour/scripts'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


import './Dashboard.scss'

class Dashboard extends Component {

  componentDidMount() {
    // console.log(scrollReveals);

    ScrollReveal().reveal(scrollReveals[5].selector, scrollReveals[5].options);
    ScrollReveal().reveal(scrollReveals[2].selector, scrollReveals[2].options);
    ScrollReveal().reveal(scrollReveals[7].selector, scrollReveals[7].options);
  }
  render() {
    // console.log(this.props);
    const { sites, auth, user } = this.props;

    if(!auth.uid) return <Redirect to='/signin' />
    return (
      <section id="dashboard">
        <div className="container">
          <div className="row">
            <div className='col-12 col-md-4'>
              <article>
                <header className="user-data sr-slide-down">
                  <img src={`https://robohash.org/${auth.uid}`} alt="Dave" />
                  <h1>{user.firstName} {user.lastName}</h1>
                  <p className="lead">{user.strapline}</p>
                  <span data-feather="email">Email: <a href={`mailto:${auth.email}`}>{auth.email}</a></span>
                </header>
                <div className="bio sr-fade-slow">
                  <h2>Bio</h2>
                  <p className="f5 lh-copy mt0-ns">
                    TYPOGRAPHY, even when poorly executed, can never be taken for granted;
                    nor is it ever accidental. Indeed, beauti- fully typeset pages are always
                    the result of long experience. Now and then they even attain the rank of
                    great artistic achievement. But the art of typesetting stands apart from
                    ex- pressive artwork, because the appeal is not limited to a small
                    circle. It is open to everyone's critical judgment, and nowhere does this
                    judgment carry more weight. Typography that can- not be read by everybody
                    is useless. Even for someone who constantly ponders matters of
                    readability and legibility, it is difficult to determine whether
                    something can be read with ease, but the average reader will rebel at
                    once when the type is too small or otherwise irritates the eye; both are
                    signs of a certain illegibility already.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-12 col-md-7 offset-1 sr-fade-slow">
              <SiteList sites={sites} />
            </div>

          </div>
        </div>
      </section>

    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    sites: state.firestore.ordered.sites,
    auth: state.firebase.auth,
    user: state.firebase.profile,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'sites' }
  ])
)(Dashboard)