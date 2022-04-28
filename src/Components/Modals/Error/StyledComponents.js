import styled from "styled-components";
import { ButtonCommon, PageTitle } from "../../../CommonStyles";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Title = styled.h2`
  ${PageTitle}
`;

export const Button = styled.button`
  ${ButtonCommon}

  font-weight: 500;
  text-transform: capitalize;
`;
