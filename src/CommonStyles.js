import styled, { css } from "styled-components";

export const widthWrap = css`
  width: min(1100px, 96%);
  margin-left: auto;
  margin-right: auto;
`;

export const Main = styled.main`
  ${widthWrap}
  padding-bottom: 20px;
`;

export const PageTitle = css`
  color: #1d1f22;
  font-size: 2.6rem;
  font-weight: 400;
  text-transform: capitalize;
`;
