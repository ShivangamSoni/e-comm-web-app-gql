import styled, { css } from "styled-components";

export const widthWrap = css`
  width: min(1100px, 96%);
  margin-left: auto;
  margin-right: auto;
`;

export const Main = styled.main`
  ${widthWrap}
`;
