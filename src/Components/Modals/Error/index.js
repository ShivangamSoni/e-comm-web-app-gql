import { Component } from "react";
import ReactDOM from "react-dom";

import { Container, Title, Button } from "./StyledComponents";

class Error extends Component {
  render() {
    return ReactDOM.createPortal(
      <Container>
        <Title>Error Loading</Title>
        <Button onClick={() => window.location.reload(false)}>Refresh Page!</Button>
      </Container>,
      document.querySelector("#modal-root"),
    );
  }
}

export default Error;
