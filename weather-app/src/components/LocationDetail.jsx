import { useEffect, useState } from "react";
import { Card, Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

function LocationDetail() {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    fetchLocationData();
  }, []);

  const params = useParams();

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
  };

  return (
    <Container>
      <h1>
        Weather in lat: {params.lat}, lon: {params.lon}
      </h1>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th></th>
            <th>Max/Min temp.</th>
            <th>Precip.</th>
            <th>Wind</th>
          </tr>
        </thead>
        <tbody>
          {locationData?.daily?.map((daily) => (
            <tr>
              <td>{format(new Date(daily.dt) * 1000, "PPPP")}</td>
              <td>
                {" "}
                {Math.round(daily.temp.max - 273.15)} °C /{" "}
                {Math.round(daily.temp.min - 273.15)} °C
              </td>
              <td>{daily.rain} mm</td>
              <td>{daily.wind_speed} m/s</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default LocationDetail;
