import { Component } from "react";
import ReactDOM from "react-dom";

import { Container, Spinner, Rectangle } from "./StyledComponents";

class Loading extends Component {
  render() {
    const pins = 5;

    return ReactDOM.createPortal(
      <Container>
        <Spinner pins={pins}>
          {[...Array(pins).keys()].map((i) => (
            <Rectangle key={i} id={i} />
          ))}
        </Spinner>
      </Container>,
      document.querySelector("#modal-root"),
    );
  }
}

export default Loading;
