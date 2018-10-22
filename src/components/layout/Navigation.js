import React from 'react';
import { Navbar, Nav } from 'react-bootstrap/lib'
import SignedInLinks from  './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navigation = () => {
  return (
    <Navbar bg="dark" expand="lg" className='navbar-dark shadow'>
      <Navbar.Brand href="/">ArchaeoApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="/">Home</Nav.Link>
        <SignedInLinks />
        <SignedOutLinks />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation