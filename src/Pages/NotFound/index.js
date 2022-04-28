// React
import { Component } from "react";

// Styled Components
import { Container, Title, Info } from "./StyledComponents";

class NotFound extends Component {
  render() {
    return (
      <Container>
        <div>
          <Title content="404">404</Title>
          <Info content="PAGE NOT FOUND">Page Not Found</Info>
        </div>
      </Container>
    );
  }
}

export default NotFound;
