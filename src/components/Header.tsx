import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Links } from "react-router";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className="navbar-brand">
          IKU
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/users" className="nav-link">
              User
            </Link>
            <Link to="/admin" className="nav-link">
              Admin
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav>
          <Nav>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <button>
                  <Link to="/signin" className="nav-link">Sign In</Link>
                </button>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> 
                <button>
                  <Link to="/signin" className="nav-link">Sign Up</Link>
                </button>
                </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
