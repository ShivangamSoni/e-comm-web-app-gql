import styled, { css } from "styled-components";

export const widthWrap = css`
  width: min(1100px, 96%);
  margin-left: auto;
  margin-right: auto;
`;

export const PageTitle = css`
  color: #1d1f22;
  font-size: 2.6rem;
  font-weight: 400;
  text-transform: capitalize;
`;

export const ButtonCommon = css`
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  padding: 0.7rem 1rem;
  background-color: #5ece7b;
  text-transform: uppercase;
`;

export const Main = styled.main`
  ${widthWrap}
  padding-bottom: 20px;
`;
