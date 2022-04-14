import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Weather app</h1>
          <p>Choose your city!</p>
        </Container>
      </Jumbotron>
    </>
  );
}

export default App;
