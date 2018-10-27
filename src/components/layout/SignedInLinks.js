import React from 'react';
import { Nav } from 'react-bootstrap/lib'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  // console.log(props);

  return (
    <Nav className="justify-content-end">
      <Nav.Item>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/addsite">Add Site</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/dashboard">{props.profile.initials}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <a className='nav-link' href="/" onClick={props.signOut}>Sign Out</a>
      </Nav.Item>
    </Nav>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)