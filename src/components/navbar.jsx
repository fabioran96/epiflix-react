import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavBar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src="assets/logo.png" alt="logo" style={{ width: '100px', height: '55px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="fw-bold">Home</Nav.Link>
            <Nav.Link href="#" className="fw-bold">TV Shows</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Movies</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Recently Added</Nav.Link>
            <Nav.Link href="#" className="fw-bold">My List</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <Nav.Link id="kids" className="fw-bold">KIDS</Nav.Link>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
