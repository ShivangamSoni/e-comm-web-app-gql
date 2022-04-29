// React
import { Component } from "react";

// Styled Components
import { Container, ImageWrapper, Image, Info, Title, Price, Overlay, Button } from "./StyledComponents";

// Components
import { ReactComponent as CartIcon } from "../../Assets/Vector.svg";

// Redux
import { connect } from "react-redux";
import { addProduct } from "../../Redux/Cart/ActionCreators";

// React Router HOC
import withRouter from "../../Utils/withRouter";

// Utility Functions
import getPrice from "../../Utils/getPrice";

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.openProduct = this.openProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  openProduct() {
    const { id, navigate } = this.props;
    navigate(`/product/${id}`);
  }

  addToCart() {
    const { id, attributes, dispatchAddProduct } = this.props;

    // If Product doesn't have Attributes then Add to cart, otherwise, open the Product Page
    if (attributes.length === 0) {
      dispatchAddProduct(id, {});
    } else {
      this.openProduct();
    }
  }

  render() {
    const { openProduct, addToCart } = this;
    const { brand, name, gallery, inStock, prices, selectedCurrency } = this.props;

    let currencyPrice = getPrice(prices, selectedCurrency);

    return (
      <Container onClick={openProduct}>
        {!inStock && <Overlay>OUT OF STOCK</Overlay>}

        <ImageWrapper>
          <Image src={gallery[0]} />
        </ImageWrapper>

        <Info>
          <Title>{`${brand} ${name}`}</Title>
          <Price>{`${selectedCurrency}${currencyPrice}`}</Price>

          {inStock && (
            <Button onClick={addToCart}>
              <CartIcon fill="#ffffff" />
            </Button>
          )}
        </Info>
      </Container>
    );
  }
}

// Redux
const MapStateToProps = (state) => {
  return { selectedCurrency: state.site.currency };
};

const MapDispatchToProps = (dispatch) => {
  return {
    dispatchAddProduct: (id, attributes) => dispatch(addProduct(id, attributes)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(withRouter(ProductCard));
