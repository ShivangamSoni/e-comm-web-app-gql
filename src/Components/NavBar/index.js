// React
import { Component } from "react";

// Styled Components
import { Nav } from "./StyledComponents";

// React Router
import { NavLink } from "react-router-dom";

// Apollo GraphQL
import { graphql } from "@apollo/client/react/hoc";
import { GET_CATEGORIES } from "../../Apollo/queries";

class NavBar extends Component {
  render() {
    const {
      data: { loading, error, categories },
    } = this.props;

    if (error) {
      return "Error Loading... Try Refreshing the Page";
    }

    if (loading) {
      return "Loading";
    }

    return (
      <Nav>
        {categories.map(({ name }, index) => {
          let to = `/category/${name}`;
          if (name === "all") {
            to = "/";
          }

          return (
            <NavLink to={to} className="link" key={index}>
              {name}
            </NavLink>
          );
        })}
      </Nav>
    );
  }
}

export default graphql(GET_CATEGORIES)(NavBar);
