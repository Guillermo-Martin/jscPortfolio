import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


function Navbar() {
  return(
    <div>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link>
            <Link to='/'>Home</Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <Link to='/about'>About</Link>
          </Nav.Link>
        </Nav.Item>
      

        <Nav.Item>
          <Nav.Link>
            <Link to="/work">Work</Link>
          </Nav.Link> 
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <Link to="/contact">Contact</Link>
          </Nav.Link> 
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;