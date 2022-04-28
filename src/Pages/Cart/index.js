// React
import { Component } from "react";

// Styled Components
import { Container, Title, CartListing, CartInfo, Detail, Info, ButtonWrapper, Button } from "./StyledComponents";

// Components
import CartItem from "../../Components/CartItem";
import Loading from "../../Components/Modals/Loading";
import Error from "../../Components/Modals/Error";

// Redux
import { connect } from "react-redux";

// Apollo GraphQL
import { graphql } from "@apollo/client/react/hoc";
import { GET_PRODUCTS_LISTING } from "../../Apollo/queries";

// React Router DOM HOC
import withRouter from "../../Utils/withRouter";

// Utility Functions
import getPrice from "../../Utils/getPrice";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.openCartFromOverlay = this.openCartFromOverlay.bind(this);
  }

  openCartFromOverlay() {
    const { toggle, navigate } = this.props;
    toggle();
    navigate("/cart");
  }

  render() {
    const {
      data: { loading, error, category },
    } = this.props;

    if (error) {
      return <Error />;
    }

    if (loading) {
      return <Loading />;
    }

    const { openCartFromOverlay } = this;
    const {
      cart: { items, tax, count },
      selectedCurrency,
      overlay,
    } = this.props;
    const { products } = category;

    const subTotal = items.reduce((res, item) => {
      const product = products.find((prod) => prod.id === item.productId);
      res += getPrice(product.prices, selectedCurrency) * item.quantity;
      return res;
    }, 0);
    const total = subTotal !== 0 ? subTotal + tax : 0;

    return (
      <Container>
        {overlay ? (
          <Detail>
            <Info>My Bag:</Info> {count} items
          </Detail>
        ) : (
          <Title>CART</Title>
        )}

        <CartListing>
          {items.map((item) => (
            <CartItem key={item.id} itemId={item.id} id={item.productId} selectedAttributes={item.attributes} quantity={item.quantity} overlay={overlay} />
          ))}
        </CartListing>

        <CartInfo>
          {!overlay && (
            <>
              <Detail>
                Tax: <Info>{`${selectedCurrency}${(total === 0 ? 0 : tax).toFixed(2)}`}</Info>
              </Detail>

              <Detail>
                Qty: <Info>{count}</Info>
              </Detail>
            </>
          )}

          <Detail variant="total" overlay={overlay}>
            Total{!overlay && ":"} <Info>{`${selectedCurrency}${total.toFixed(2)}`}</Info>
          </Detail>

          <ButtonWrapper overlay={overlay}>
            {overlay && (
              <Button variant="outlined" overlay={overlay} onClick={openCartFromOverlay}>
                VIEW BAG
              </Button>
            )}

            <Button overlay={overlay} disabled={count === 0}>
              Checkout
            </Button>
          </ButtonWrapper>
        </CartInfo>
      </Container>
    );
  }
}

// GraphQL
const withGQL = graphql(GET_PRODUCTS_LISTING, {
  variables: { category: { title: "all" } },
});

// Redux
const MapStateToProps = (state) => {
  return {
    cart: state.cart,
    selectedCurrency: state.site.currency,
  };
};

export default connect(MapStateToProps, null)(withRouter(withGQL(Cart)));
