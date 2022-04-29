import styled from "styled-components";
import { widthWrap } from "../../CommonStyles";

export const Container = styled.header`
  ${widthWrap}

  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
  gap: 5px;
  position: relative;
  margin-bottom: 80px;
`;

export const SiteLogo = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100px;
  gap: 20px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &::after {
    content: "${({ count }) => (count > 0 ? count : "")}";
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    background-color: #1d1f22;
    font-size: 0.875rem;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transform: scale(${({ count }) => (count > 0 ? 1 : 0)});
  }
`;

export const CartOverlay = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 90;
  width: min(350px, 95vw);
  height: min(600px, 90vh);
  background-color: #fff;
  padding: 32px 16px;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: rgba(57, 55, 72, 0.22);
`;
