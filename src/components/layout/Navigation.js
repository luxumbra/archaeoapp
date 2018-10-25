import React from 'react';
import { Navbar, Nav } from 'react-bootstrap/lib'
import SignedInLinks from  './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navigation = (props) => {

  const { auth } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">ArchaeoApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="/">Home</Nav.Link>
        {links}
      </Navbar.Collapse>
    </Navbar>
  )
}

const mapStateToProps = (state) => {
  // console.log('Auth state: ', state);
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(Navigation)