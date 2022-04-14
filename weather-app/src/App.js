import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LocationSearch from "./components/LocationSearch";

function App() {
  return (
    <BrowserRouter>
      <Jumbotron fluid>
        <Container>
          <h1>Weather app</h1>
          <p>Choose your city!</p>
        </Container>
      </Jumbotron>
      <Routes>
        <Route path="/" element={<LocationSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
