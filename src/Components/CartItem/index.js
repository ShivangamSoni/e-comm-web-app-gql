import { Component } from "react";
import {
  Container,
  Info,
  Brand,
  Name,
  Wrapper,
  Quantity,
  QuantityBtn,
  QuantityValue,
  Gallery,
  Section,
  Price,
  AttrWrapper,
  Title,
  ColorAttr,
  TextAttr,
  Button,
  Slides,
  Slide,
  Image,
  Controls,
  Arrow,
} from "./StyledComponents";

import { ReactComponent as DeleteIcon } from "../../Assets/Delete.svg";
import { ReactComponent as PlusIcon } from "../../Assets/plus.svg";
import { ReactComponent as MinusIcon } from "../../Assets/minus.svg";
import { ReactComponent as LeftArrow } from "../../Assets/chevron-left.svg";
import { ReactComponent as RightArrow } from "../../Assets/chevron-right.svg";

import { graphql } from "@apollo/client/react/hoc";
import { GET_PRODUCT_DETAILS } from "../../Apollo/queries";
import getPrice from "../../Utils/getPrice";

import { connect } from "react-redux";
import { removeProduct, updateQuantity } from "../../Redux/Cart/ActionCreators";

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSlide: 0,
    };

    this.changeSlide = this.changeSlide.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  changeSlide(direction) {
    const {
      data: {
        product: { gallery },
      },
    } = this.props;

    this.setState((prev) => {
      let newSlide = prev.selectedSlide + direction;

      if (newSlide >= gallery.length) {
        newSlide = gallery.length - 1;
      } else if (newSlide < 0) {
        newSlide = 0;
      }

      return { selectedSlide: newSlide };
    });
  }

  changeQuantity(sign) {
    const { itemId, dispatchUpdateQuantity } = this.props;

    dispatchUpdateQuantity(itemId, sign);
  }

  deleteItem() {
    const { itemId, dispatchDeleteProduct } = this.props;

    dispatchDeleteProduct(itemId);
  }

  render() {
    const {
      data: { loading, error, product },
    } = this.props;

    if (error) {
      return "Error";
    }

    if (loading) {
      return "Loading....";
    }

    const { changeSlide, changeQuantity, deleteItem } = this;
    const { selectedSlide } = this.state;
    const { selectedCurrency, selectedAttributes, quantity } = this.props;
    const { name, brand, prices, attributes, gallery } = product;
    const currencyPrice = getPrice(prices, selectedCurrency);

    const attributeElements = attributes.map(({ id: attrId, items, type, name }) => {
      let attrSets = items.map(({ id, value, displayValue }) => {
        const active = selectedAttributes[attrId] === id;

        if (type === "swatch") {
          return <ColorAttr key={id} title={displayValue} color={value} active={active}></ColorAttr>;
        } else {
          return (
            <TextAttr key={id} title={displayValue} active={active}>
              {value}
            </TextAttr>
          );
        }
      });

      return (
        <Section key={attrId}>
          <Title>{name}:</Title>

          <AttrWrapper type={type}>{attrSets}</AttrWrapper>
        </Section>
      );
    });

    return (
      <Container>
        <Info>
          <Section>
            <Brand>{brand}</Brand>
            <Name>{name}</Name>
          </Section>

          <Section>
            <Price>{`${selectedCurrency}${currencyPrice}`}</Price>
          </Section>

          {attributeElements}

          <Section>
            <Button>
              <DeleteIcon fill="currentColor" title="Delete" onClick={deleteItem} />
            </Button>
          </Section>
        </Info>

        <Wrapper>
          <Quantity>
            <QuantityBtn onClick={() => changeQuantity("+")}>
              <PlusIcon fill="currentColor" />
            </QuantityBtn>

            <QuantityValue>{quantity}</QuantityValue>

            <QuantityBtn onClick={() => changeQuantity("-")}>
              <MinusIcon fill="currentColor" />
            </QuantityBtn>
          </Quantity>

          <Gallery>
            <Slides slide={selectedSlide}>
              {gallery.map((imgSrc, index) => (
                <Slide key={index}>
                  <Image src={imgSrc} />
                </Slide>
              ))}
            </Slides>

            {gallery.length > 1 ? (
              <Controls>
                <Arrow onClick={() => changeSlide(-1)}>
                  <LeftArrow fill="currentColor" />
                </Arrow>

                <Arrow onClick={() => changeSlide(+1)}>
                  <RightArrow fill="currentColor" />
                </Arrow>
              </Controls>
            ) : null}
          </Gallery>
        </Wrapper>
      </Container>
    );
  }
}

const withGQL = graphql(GET_PRODUCT_DETAILS, {
  options: (props) => {
    let { id } = props;
    return { variables: { productId: id } };
  },
});

const MapStateToProps = (state) => {
  return { selectedCurrency: state.site.currency };
};

const MapDispatchToProps = (dispatch) => {
  return {
    dispatchUpdateQuantity: (id, sign) => dispatch(updateQuantity(id, sign)),
    dispatchDeleteProduct: (id) => dispatch(removeProduct(id)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(withGQL(CartItem));
