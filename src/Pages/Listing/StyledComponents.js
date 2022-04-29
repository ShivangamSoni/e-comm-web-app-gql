import styled from "styled-components";
import { PageTitle } from "../../CommonStyles";

export const Container = styled.div`
  margin-top: 10px;
`;

export const Title = styled.h1`
  ${PageTitle}
  margin-bottom: 100px;
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 444px;
  column-gap: 40px;
  row-gap: 100px;
`;
