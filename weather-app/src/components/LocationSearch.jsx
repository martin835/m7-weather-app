import { Card, Col, Container, Form, Row } from "react-bootstrap";
import FavoriteCard from "./FavoriteCard";
import SearchCard from "./SearchCard";

function LocationSearch() {
  return (
    <Container>
      <Row className="justify-content-between">
        <Col xs={6}>
          <Form>
            <Form.Control size="lg" type="text" placeholder="Search city" />
          </Form>
        </Col>
        <Col xs={4}>
          <h3>My locations</h3>
        </Col>
      </Row>
      {/* RESULTS GO HERE: ⬇️⬇️⬇️ */}
      <Row className="justify-content-between">
        <Col xs={6}>
          <SearchCard />
          <SearchCard />
          <SearchCard />
        </Col>
        <Col xs={4}>
          <FavoriteCard />
        </Col>
      </Row>
    </Container>
  );
}

export default LocationSearch;
