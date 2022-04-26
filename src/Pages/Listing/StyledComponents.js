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
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  gap: 30px;
`;
