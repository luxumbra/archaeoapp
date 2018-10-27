import React from 'react';
import { Navbar, Nav } from 'react-bootstrap/lib'
import SignedInLinks from  './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navigation = (props) => {

  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <Navbar expand="lg" className="fixed-top">
      <Navbar.Brand href="/#landing">ArchaeoApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="/#landing" data-scroll>Home</Nav.Link>
        <Nav.Link href="/#about" data-scroll>About</Nav.Link>
        <Nav.Link href="/#sites" data-scroll>Sites</Nav.Link>
        {links}
      </Navbar.Collapse>
    </Navbar>
  )
}

const mapStateToProps = (state) => {
  // console.log('Auth state: ', state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(Navigation)