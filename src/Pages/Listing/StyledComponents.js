import styled from "styled-components";
import { PageTitle } from "../../CommonStyles";

export const Container = styled.div`
  margin-top: 10px;
`;

export const Title = styled.h1`
  ${PageTitle}
  margin-bottom: 50px;
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 450px;
  gap: 30px;
`;
