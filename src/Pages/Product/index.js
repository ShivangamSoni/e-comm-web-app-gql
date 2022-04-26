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

class Product extends Component {
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

    const { brand, name, gallery, description, prices, attributes } = product;
    const currencyPrice = getPrice(prices, selectedCurrency);

    console.log(attributes);

    const attributeElements = attributes.map(({ id, items, type, name }) => {
      let attrSets = [];

      if (type === "swatch") {
        attrSets = items.map(({ id, value, displayValue }) => {
          return <ColorAttr key={id} title={displayValue} color={value} />;
        });
      } else {
        attrSets = items.map(({ id, value, displayValue }) => {
          return (
            <TextAttr key={id} title={displayValue} value={value}>
              {displayValue}
            </TextAttr>
          );
        });
      }

      return (
        <Section key={id}>
          <Title>{name}:</Title>

          <AttrWrapper>{attrSets}</AttrWrapper>
        </Section>
      );
    });

    return (
      <Container>
        <Gallery>
          <ShowCase>
            <Tile>
              <Image src={gallery[0]} />
            </Tile>
          </ShowCase>

          <SelectedImage>
            <Image src={gallery[0]} contain />
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

          <Button>Add to Cart</Button>

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

export default connect(MapStateToProps, null)(withRouter(withGQL(Product)));
