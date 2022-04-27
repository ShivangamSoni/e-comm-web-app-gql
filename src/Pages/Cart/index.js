import { Component } from "react";
import { Container, Title, CartListing, CartInfo, Detail, Info, Button } from "./StyledComponents";

import { connect } from "react-redux";

import { graphql } from "@apollo/client/react/hoc";
import { GET_PRODUCTS_LISTING } from "../../Apollo/queries";
import CartItem from "../../Components/CartItem";
import getPrice from "../../Utils/getPrice";

class Cart extends Component {
  render() {
    const {
      data: { loading, error, category },
    } = this.props;

    if (error) {
      return "Error";
    }

    if (loading) {
      return "Loading...";
    }

    const {
      cart: { items, tax, count },
      selectedCurrency,
    } = this.props;
    const { products } = category;

    const subTotal = items.reduce((res, item) => {
      const product = products.find((prod) => prod.id === item.productId);

      res += getPrice(product.prices, selectedCurrency) * item.quantity;

      return res;
    }, 0);
    const total = subTotal + tax;

    return (
      <Container>
        <Title>CART</Title>

        <CartListing>
          {items.map((item) => (
            <CartItem key={item.id} itemId={item.id} id={item.productId} selectedAttributes={item.attributes} quantity={item.quantity} />
          ))}
        </CartListing>

        <CartInfo>
          <Detail>
            Tax: <Info>{`${selectedCurrency}${tax}`}</Info>
          </Detail>

          <Detail>
            Qty: <Info>{count}</Info>
          </Detail>

          <Detail type="total">
            Total: <Info>{`${selectedCurrency}${total}`}</Info>
          </Detail>

          <Button>Order</Button>
        </CartInfo>
      </Container>
    );
  }
}

const withGQL = graphql(GET_PRODUCTS_LISTING, {
  variables: { category: { title: "all" } },
});

const MapStateToProps = (state) => {
  return {
    cart: state.cart,
    selectedCurrency: state.site.currency,
  };
};

export default connect(MapStateToProps, null)(withGQL(Cart));
