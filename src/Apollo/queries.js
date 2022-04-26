import { gql } from "@apollo/client";

export const GET_CURRENCIES = gql`
  query CurrenciesList {
    currencies {
      label
      symbol
    }
  }
`;

export const GET_CATEGORIES = gql`
  query CategoriesList {
    categories {
      name
    }
  }
`;

export const GET_PRODUCTS_LISTING = gql`
  query ProductListing($category: CategoryInput) {
    category(input: $category) {
      products {
        id
        name
        inStock
        gallery
        prices {
          currency {
            symbol
          }
          amount
        }
      }
      name
    }
  }
`;
