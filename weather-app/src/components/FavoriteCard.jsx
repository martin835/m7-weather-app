import { Button, Card } from "react-bootstrap";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FaTemperatureLow } from "react-icons/fa";
import { BsUmbrella } from "react-icons/bs";
import { SiWindicss } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function FavoriteCard() {
  const navigate = useNavigate();
  return (
    <Card text="black" style={{ width: "18rem" }} className="mb-2">
      <Card.Header>Bratislava, SK</Card.Header>
      <Card.Body>
        <Card.Title> Current conditions </Card.Title>
        <Card.Text>
          <div>
            <BsFillCloudSunFill />
          </div>
          <div>
            <FaTemperatureLow /> 25°
          </div>
          <div>Feels like: 19°</div>
          <div>
            <BsUmbrella /> 0.1 mm
          </div>
          <div>
            <SiWindicss /> 1 (0) m/s
          </div>
        </Card.Text>
        <Button variant="link" onClick={() => navigate("/lat/lon")}>
          See detail forecast
        </Button>
        <Button variant="link">
          <AiFillStar className="mb-1" /> Remove from My locations
        </Button>
      </Card.Body>
    </Card>
  );
}

export default FavoriteCard;
