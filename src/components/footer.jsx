 
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center mb-2">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 text-center mb-2">
          <Col>
            <p><a href="#" alt="footer link">Audio and Subtitles</a></p>
            <p><a href="#" alt="footer link">Media Center</a></p>
            <p><a href="#" alt="footer link">Privacy</a></p>
            <p><a href="#" alt="footer link">Contact us</a></p>
          </Col>
          <Col>
            <p><a href="#" alt="footer link">Audio Description</a></p>
            <p><a href="#" alt="footer link">Investor Relations</a></p>
            <p><a href="#" alt="footer link">Legal Notices</a></p>
          </Col>
          <Col>
            <p><a href="#" alt="footer link">Help Center</a></p>
            <p><a href="#" alt="footer link">Jobs</a></p>
            <p><a href="#" alt="footer link">Cookie Preferences</a></p>
          </Col>
          <Col>
            <p><a href="#" alt="footer link">Gift Cards</a></p>
            <p><a href="#" alt="footer link">Terms of Use</a></p>
            <p><a href="#" alt="footer link">Corporate Information</a></p>
          </Col>
        </Row>
        <Row className="text-center mb-2">
          <Col>
            <Button variant="outline-secondary" className="footer-button rounded-0 mt-3">Service Code</Button>
          </Col>
        </Row>
        <Row className="text-center mb-2 mt-2">
          <Col className="copyright">
            © 1997-2023 Netflix, Inc.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
