import React from 'react';
import { Nav } from 'react-bootstrap/lib'

const SignedOutLinks = () => {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/signin">Sign In</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default SignedOutLinks