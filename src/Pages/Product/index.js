import { Component } from "react";

import { graphql } from "@apollo/client/react/hoc";
import { GET_PRODUCT_DETAILS } from "../../Apollo/queries";

import withRouter from "../../Utils/withRouter";

import { connect } from "react-redux";

import {
  Container,
  Gallery,
  ShowCase,
  Tile,
  SelectedImage,
  Image,
  Info,
  Brand,
  Name,
  Price,
  Section,
  AttrWrapper,
  ColorAttr,
  TextAttr,
  Title,
  Button,
  Description,
} from "./StyledComponents";
import getPrice from "../../Utils/getPrice";
import { addProduct } from "../../Redux/Cart/ActionCreators";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAttributes: null,
      imageIndex: 0,
    };

    this.changeImage = this.changeImage.bind(this);
    this.updateAttribute = this.updateAttribute.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    // Needs to be initialized when user Access Product Again
    // Because in this case cached data is retrieved by Apollo
    this.initializeAttributes();
  }

  componentDidUpdate() {
    this.initializeAttributes();
  }

  initializeAttributes() {
    const {
      data: { loading, product },
    } = this.props;

    const { selectedAttributes } = this.state;

    if (!loading && product && !selectedAttributes) {
      const { attributes } = product;
      const selectAttrs = attributes.reduce((res, attr) => {
        const { id, items } = attr;
        res[id] = items[0].id;
        return res;
      }, {});

      this.setState({ selectedAttributes: selectAttrs });
    }
  }

  changeImage(index) {
    this.setState({ imageIndex: index });
  }

  updateAttribute(attrId, itemId) {
    this.setState((prev) => {
      const prevSelected = prev.selectedAttributes;

      if (prevSelected[attrId] !== itemId) {
        prevSelected[attrId] = itemId;
        return { selectedAttributes: prevSelected };
      }
    });
  }

  addToCart() {
    const {
      data: {
        product: { id },
      },
    } = this.props;
    const { selectedAttributes } = this.state;

    this.props.dispatchAddProduct(id, selectedAttributes);
  }

  render() {
    const {
      data: { error, loading, product },
      selectedCurrency,
    } = this.props;

    if (error) {
      return "Error Loading Try Again...";
    }

    if (loading) {
      return "Loading....";
    }

    const { changeImage, updateAttribute, addToCart } = this;
    const { imageIndex, selectedAttributes } = this.state;
    const { brand, name, inStock, gallery, description, prices, attributes } = product;
    const currencyPrice = getPrice(prices, selectedCurrency);

    let attributeElements = null;

    if (selectedAttributes) {
      attributeElements = attributes.map(({ id: attrId, items, type, name }) => {
        let attrSets = items.map(({ id, value, displayValue }) => {
          const active = selectedAttributes[attrId] === id;
          const onCLick = () => updateAttribute(attrId, id);

          if (type === "swatch") {
            return <ColorAttr key={id} title={displayValue} color={value} active={active} onClick={onCLick} disabled={!inStock}></ColorAttr>;
          } else {
            return (
              <TextAttr key={id} title={displayValue} active={active} onClick={onCLick} disabled={!inStock}>
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
    }

    return (
      <Container>
        <Gallery>
          <ShowCase>
            {gallery.map((imgSrc, index) => (
              <Tile key={index} onClick={() => changeImage(index)}>
                <Image src={imgSrc} />
              </Tile>
            ))}
          </ShowCase>

          <SelectedImage>
            <Image src={gallery[imageIndex]} contain />
          </SelectedImage>
        </Gallery>

        <Info>
          <Section>
            <Brand>{brand}</Brand>
            <Name>{name}</Name>
          </Section>

          {attributeElements}

          <Section>
            <Title>price:</Title>
            <Price>{currencyPrice}</Price>
          </Section>

          <Button onClick={addToCart} disabled={!inStock}>
            {inStock ? "Add to Cart" : "Out of Stock"}
          </Button>

          <Description dangerouslySetInnerHTML={{ __html: description }} />
        </Info>
      </Container>
    );
  }
}

const withGQL = graphql(GET_PRODUCT_DETAILS, {
  options: (props) => {
    let { id } = props.params;
    return { variables: { productId: id } };
  },
});

const MapStateToProps = (state) => {
  return { selectedCurrency: state.site.currency };
};

const MapDispatchToProps = (dispatch) => {
  return { dispatchAddProduct: (id, attributes) => dispatch(addProduct(id, attributes)) };
};

export default connect(MapStateToProps, MapDispatchToProps)(withRouter(withGQL(Product)));
