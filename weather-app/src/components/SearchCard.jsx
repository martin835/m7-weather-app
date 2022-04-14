import { Card } from "react-bootstrap";

function SearchCard() {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>Prague</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Prague, CZ</Card.Subtitle>
        <Card.Link href="#">See weather</Card.Link>
        <Card.Link href="#">Add to My locations</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default SearchCard;
