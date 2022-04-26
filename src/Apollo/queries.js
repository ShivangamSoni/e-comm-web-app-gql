import { gql } from "@apollo/client";

export const GET_CURRENCIES = gql`
  query GetCurrenciesList {
    currencies {
      label
      symbol
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategoriesList {
    categories {
      name
    }
  }
`;

export const GET_PRODUCTS_LISTING = gql`
  query GetProductsList($category: CategoryInput) {
    category(input: $category) {
      products {
        id
        brand
        name
        inStock
        gallery
        prices {
          currency {
            symbol
          }
          amount
        }
        attributes {
          id
        }
      }
    }
  }
`;

export const GET_PRODUCT_DETAILS = gql`
  query ProductDetails($productId: String!) {
    product(id: $productId) {
      id
      name
      inStock
      gallery
      description
      attributes {
        id
        name
        type
        items {
          value
          displayValue
          id
        }
      }
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      brand
    }
  }
`;
