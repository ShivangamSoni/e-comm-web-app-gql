import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
`;

export const Title = styled.h1`
  color: #1d1f22;
  font-size: 2.6rem;
  font-weight: 400;
  margin-bottom: 70px;
  text-transform: capitalize;
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 450px;
  gap: 30px;
`;
