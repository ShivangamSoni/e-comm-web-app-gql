import styled from "styled-components";
import { PageTitle, ButtonCommon } from "../../CommonStyles";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  gap: 20px;
`;

export const Title = styled.h2`
  ${PageTitle}
  margin-bottom: 10px;
`;

export const CartListing = styled.div`
  overflow-y: auto;
  padding-right: 5px;
`;

export const CartInfo = styled.div``;

export const Detail = styled.p`
  ${({ overlay, variant }) => {
    const styles = {};
    if (variant === "total") {
      styles.margin = "15px 0";

      if (overlay) {
        styles.display = "flex";
        styles.alignItems = "center";
        styles.justifyContent = "space-between";
      }
    }

    return styles;
  }}
`;

export const Info = styled.span`
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  width: ${({ overlay }) => (overlay ? "50%" : "min(30%, 250px)")};
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

export const Button = styled.button`
  ${ButtonCommon}

  flex: 1;
  border: ${({ variant }) => (variant === "outlined" ? "1px solid #1d1f22" : "none")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 0.875rem;
  color: ${({ variant }) => (variant === "outlined" ? "#1d1f22" : "#fff")};
  padding: ${({ overlay }) => (overlay ? "0.3rem" : "0.5rem")};
  background-color: ${({ variant }) => (variant === "outlined" ? "#fff" : "#5ece7b")};
`;
