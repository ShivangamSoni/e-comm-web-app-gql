// React
import { Component } from "react";

// Styled Components
import { Container, Title, ProductsList } from "./StyledComponents";

// Components
import ProductCard from "../../Components/ProductCard";

// React Router DOM HOC
import withRouter from "../../Utils/withRouter";

// Apollo GraphQL
import { graphql } from "@apollo/client/react/hoc";
import { GET_PRODUCTS_LISTING } from "../../Apollo/queries";

class Listing extends Component {
  render() {
    const {
      data: { loading, error, category },
      params,
    } = this.props;

    if (error) {
      return "Error";
    }

    if (loading) {
      return "Loading....";
    }

    return (
      <Container>
        <Title>{params.category || "All Products"}</Title>

        <ProductsList>
          {category.products.slice(0).map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </ProductsList>
      </Container>
    );
  }
}

// GraphQL
const withGQL = graphql(GET_PRODUCTS_LISTING, {
  options: (props) => {
    let { category } = props.params;

    if (!category) {
      category = "all";
    }

    return { variables: { category: { title: category } } };
  },
});

export default withRouter(withGQL(Listing));
