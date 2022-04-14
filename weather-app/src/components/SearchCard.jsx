import { Button, Card } from "react-bootstrap";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SearchCard() {
  const navigate = useNavigate();

  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>Prague</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Prague, CZ</Card.Subtitle>

        <Button
          variant="link"
          className="pl-0"
          onClick={() => navigate("/lat/lon")}
        >
          See weather
        </Button>
        <Button variant="link">
          <AiOutlineStar className="mb-1" /> Add to My locations
        </Button>
        {/*  <Button variant="link">
          <AiFillStar className="mb-1" /> Remove from My locations
        </Button> */}
      </Card.Body>
    </Card>
  );
}

export default SearchCard;
