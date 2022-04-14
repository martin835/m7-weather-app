import { Card, Container, Table } from "react-bootstrap";

function LocationDetail() {
  return (
    <Container>
      <h1>Weather in Bratislava, SK</h1>
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
          <tr>
            <td>Today, 14 Apr.</td>
            <td>20° / 12°</td>
            <td>0.1 mm</td>
            <td>1 (0) m/s</td>
          </tr>
          <tr>
            <td>Friday, 15 Apr.</td>
            <td>21° / 12°</td>
            <td>0 mm</td>
            <td>2 (0) m/s</td>
          </tr>
          <tr>
            <td>Saturday, 16 Apr.</td>
            <td>20° / 12° </td>
            <td>0 mm </td>
            <td>1 (0) m/s</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default LocationDetail;
