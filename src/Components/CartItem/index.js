// React
import { Component } from "react";

// Styled Components
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
  Slides,
  Slide,
  Image,
  Controls,
  Arrow,
} from "./StyledComponents";

// Components
import Loading from "../Modals/Loading";
import Error from "../Modals/Error";

// Icons
import { ReactComponent as PlusIcon } from "../../Assets/plus.svg";
import { ReactComponent as MinusIcon } from "../../Assets/minus.svg";
import { ReactComponent as LeftArrow } from "../../Assets/chevron-left.svg";
import { ReactComponent as RightArrow } from "../../Assets/chevron-right.svg";

// Apollo GraphQL
import { graphql } from "@apollo/client/react/hoc";
import { GET_PRODUCT_DETAILS } from "../../Apollo/queries";

// Redux
import { connect } from "react-redux";
import { updateAttributes, updateQuantity } from "../../Redux/Cart/ActionCreators";

// React Router DOM HOC
import withRouter from "../../Utils/withRouter";

// Utility Functions
import getPrice from "../../Utils/getPrice";

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSlide: 0,
    };

    this.changeSlide = this.changeSlide.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.changeAttribute = this.changeAttribute.bind(this);
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

  changeAttribute(type, value) {
    const { itemId, selectedAttributes, dispatchUpdateAttributes } = this.props;

    // Creating a Deep Copy of Selected Attributes
    const cpyAttributes = JSON.parse(JSON.stringify(selectedAttributes));
    cpyAttributes[type] = value;

    dispatchUpdateAttributes(itemId, cpyAttributes);
  }

  render() {
    const {
      data: { loading, error, product },
    } = this.props;

    if (error) {
      return <Error />;
    }

    if (loading) {
      return <Loading />;
    }

    const { changeSlide, changeQuantity, changeAttribute } = this;
    const { selectedSlide } = this.state;
    const { selectedCurrency, selectedAttributes, quantity, overlay, navigate, id } = this.props;
    const { name, brand, prices, attributes, gallery } = product;
    const currencyPrice = getPrice(prices, selectedCurrency);

    const attributeElements = attributes.map(({ id: attrId, items, type, name }) => {
      let attrSets = items.map(({ id, value, displayValue }) => {
        const active = selectedAttributes[attrId] === id;

        const onClick = () => changeAttribute(attrId, id);

        if (type === "swatch") {
          return <ColorAttr key={id} title={displayValue} color={value} active={active} onClick={onClick}></ColorAttr>;
        } else {
          return (
            <TextAttr key={id} title={displayValue} active={active} onClick={onClick}>
              {value}
            </TextAttr>
          );
        }
      });

      return (
        <Section key={attrId}>
          <Title overlay={overlay}>{name}:</Title>

          <AttrWrapper type={type} overlay={overlay}>
            {attrSets}
          </AttrWrapper>
        </Section>
      );
    });

    return (
      <Container overlay={overlay}>
        <Info>
          <Section link={true} onClick={() => navigate(`/product/${id}`)}>
            <Brand overlay={overlay}>{brand}</Brand>
            <Name overlay={overlay}>{name}</Name>
          </Section>

          <Section>
            <Price overlay={overlay}>{`${selectedCurrency}${currencyPrice}`}</Price>
          </Section>

          <Section>{attributeElements}</Section>
        </Info>

        <Wrapper>
          <Quantity overlay={overlay}>
            <QuantityBtn onClick={() => changeQuantity("+")} overlay={overlay}>
              <PlusIcon fill="currentColor" />
            </QuantityBtn>

            <QuantityValue overlay={overlay}>{quantity}</QuantityValue>

            <QuantityBtn onClick={() => changeQuantity("-")} overlay={overlay}>
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

// GraphQL
const withGQL = graphql(GET_PRODUCT_DETAILS, {
  options: (props) => {
    let { id } = props;
    return { variables: { productId: id } };
  },
});

// Redux
const MapStateToProps = (state) => {
  return { selectedCurrency: state.site.currency };
};

const MapDispatchToProps = (dispatch) => {
  return {
    dispatchUpdateQuantity: (id, sign) => dispatch(updateQuantity(id, sign)),
    dispatchUpdateAttributes: (id, attributes) => dispatch(updateAttributes(id, attributes)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(withRouter(withGQL(CartItem)));
