import styled from "styled-components";
import { widthWrap } from "../../CommonStyles";

export const Container = styled.header`
  ${widthWrap}
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
  gap: 5px;
  padding: 10px 0;
  position: relative;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 5px;
  cursor: pointer;

  &::after {
    content: "${({ count }) => (count > 0 ? count : "")}";
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 15px;
    background-color: #1d1f22;
    font-size: 11px;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    transform: scale(${({ count }) => (count > 0 ? 1 : 0)});
  }
`;

export const CartOverlay = styled.div`
  position: absolute;
  top: 100%;
  filter: drop-shadow(0px 4px 35px rgba(57, 55, 72, 0.22));
  right: 0;
  z-index: 99;
  width: 350px;
  height: min(600px, 100vh);
  background-color: red;
`;
