import React, { Component } from 'react'
import {Container, Row, Col } from 'react-bootstrap/lib'
import SiteList from '../sites/SiteList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { sites, auth } = this.props;

    if(!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container dashboard">
        <div className="row">
          <div className='col-12 col-md-4'>
            <article className="cf ph3 ph5-ns pv5">
              <header className="user-data fn fl-ns w-30-ns pr4-ns bt bw2">
                <img src={`https://robohash.org/blah`} alt="Dave" />
                <h1 className="f2 lh-title fw9 mb3 mt0 pt3">Dave</h1>
                <h2 className="f3 white lh-title">Strap</h2>
                <span className="f6 ttu tracked white">hello@crafted.im</span>
              </header>
              <div className="fn fl-ns w-70-ns">
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
                <p className="f5 lh-copy">
                  All typography consists of letters. These appear either in the form of a
                  smoothly running sentence or as an assembly of lines, which may even have
                  contrasting shapes. Good typog- raphy begins, and this is no minor
                  matter, with the typeset- ting of a single line of text in a book or a
                  newspaper. Using exactly the same typeface, it is possible to create either
                  a pleasant line, easily read, or an onerous one. Spacing, if it is too wide
                  or too compressed, will spoil almost any typeface.
              </p>

              </div>
            </article>
          </div>
          <div className="col-12 col-md-8">
            <SiteList sites={sites} />
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    sites: state.firestore.ordered.sites,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'sites' }
  ])
)(Dashboard)