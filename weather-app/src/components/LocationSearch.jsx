import { Card, Col, Container, Form, Row } from "react-bootstrap";
import FavoriteCard from "./FavoriteCard";
import SearchCard from "./SearchCard";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function LocationSearch() {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  /*  const myLocations = useSelector((state) => state.myLocations.locations);

  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    fetchLocationData();
  }, [myLocations]);

  const fetchLocationData = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${params.lat}&lon=${params.lon}&appid=9953c37505472c6c83ee8e19bd92df0f`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setLocationData(data);
      } else {
        alert("something wrong with the data");
      }
    } catch (error) {
      console.log(error);
    }
  }; */

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=9953c37505472c6c83ee8e19bd92df0f`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setSearchData(data);
      } else {
        alert("something wrong with the data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Row className="justify-content-between">
        <Col xs={6}>
          <Form
            onSubmit={(e) => {
              fetchData(e);
            }}
          >
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search city"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form>
        </Col>
        <Col xs={4}>
          <h3>My locations</h3>
        </Col>
      </Row>
      {/* RESULTS GO HERE: ⬇️⬇️⬇️ */}
      <Row className="justify-content-between">
        <Col xs={6}>
          {searchData.map((location, i) => (
            <SearchCard
              location={location}
              key={location.lat + location.lon + i}
            />
          ))}
        </Col>
        <Col xs={4}>
          <FavoriteCard />
        </Col>
      </Row>
    </Container>
  );
}

export default LocationSearch;
