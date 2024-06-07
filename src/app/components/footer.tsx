import { Row, Col } from 'react-bootstrap';
import '../styles/footer.css';

export default function Footer() {
  const today = new Date();

  return (
    <div id="footer">
      <Row>
        <Col>
          <em>"The only way to do great work is to love what you do" - Steve Jobs</em>
        </Col>
      </Row>
      <Row>
        <Col>
          <small>Built by Ken Esguerra</small>
        </Col>
      </Row>
      <Row>
        <Col>
          <small className="copyright">&copy; { today.getFullYear() + ". "} All rights reserved.</small>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <small id="attributions">
            <a href="https://www.flaticon.com/free-icons/lion" title="lion icons">Lion icons created by Delwar018 - Flaticon</a>
          </small>
        </Col>
      </Row>
    </div>
  )
}       