import { Button, Card } from "react-bootstrap";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToMyLocationsAction,
  removeFromMyLocationsAction,
} from "../redux/actions";

function SearchCard({ location }) {
  const navigate = useNavigate();

  const myLocations = useSelector((state) => state.myLocations.locations);
  const dispatch = useDispatch();

  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>{location.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {location.state}, {location.country}
        </Card.Subtitle>

        <Button
          variant="link"
          className="pl-0"
          onClick={() => navigate(`/${location.lat}/${location.lon}`)}
        >
          See weather
        </Button>
        {myLocations
          .map((l) => l.lat + l.lon)
          .includes(location.lat + location.lon) ? (
          <Button
            variant="link"
            onClick={() =>
              dispatch(removeFromMyLocationsAction(location.lat, location.lon))
            }
          >
            <AiFillStar className="mb-1" /> Remove from My locations
          </Button>
        ) : (
          <Button
            variant="link"
            onClick={() => dispatch(addToMyLocationsAction(location))}
          >
            <AiOutlineStar className="mb-1" /> Add to My locations
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default SearchCard;
