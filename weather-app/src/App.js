import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import LocationDetail from "./components/LocationDetail";
import LocationSearch from "./components/LocationSearch";

function App() {
  return (
    <BrowserRouter>
      <Jumbotron fluid>
        <Container>
          <h1>Weather app</h1>
          <p>Choose your city!</p>
          <Link to="/">Home</Link>
        </Container>
      </Jumbotron>
      <Routes>
        <Route path="/" element={<LocationSearch />} />
        <Route path="/:lat/:lon" element={<LocationDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
