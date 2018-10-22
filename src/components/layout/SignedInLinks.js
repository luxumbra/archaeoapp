import React from 'react';
import { Nav } from 'react-bootstrap/lib'

const SignedInLinks = () => {
  return (
    <Nav className="justify-content-end">
      <Nav.Item>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/addsite">Add Site</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/dashboard">DS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">Sign Out</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default SignedInLinks