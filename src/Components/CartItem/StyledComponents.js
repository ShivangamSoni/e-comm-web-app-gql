import styled from "styled-components";
import { ButtonCommon } from "../../CommonStyles";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, ${({ overlay }) => (overlay ? "1fr" : "250px")});
  grid-template-rows: ${({ overlay }) => (overlay ? "190px" : "280px")} auto;
  grid-template-areas:
    "info wrapper"
    "info .";
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 1px solid #e5e5e5;
  padding-left: 5px;

  &:first-of-type {
    border-top: 1px solid #e5e5e5;
  }
`;

export const Info = styled.div`
  grid-area: info;
  display: grid;
  grid-auto-rows: minmax(auto, max-content);
  gap: 20px;
`;

export const Brand = styled.h2`
  color: #1d1f22;
  font-size: ${({ overlay }) => (overlay ? "1rem" : "1.8rem")};
  font-weight: ${({ overlay }) => (overlay ? 300 : 600)};
  padding-bottom: ${({ overlay }) => (overlay ? "0" : "8px")}; ;
`;

export const Name = styled.h3`
  color: #1d1f22;
  font-size: ${({ overlay }) => (overlay ? "1rem" : "1.8rem")};
  font-weight: ${({ overlay }) => (overlay ? 300 : 400)};
`;

export const Section = styled.div`
  display: grid;
  gap: 8px;
  cursor: ${({ link }) => link && "pointer"};
`;

export const AttrWrapper = styled.div`
  display: grid;
  ${({ type, overlay }) => {
    const styles = {};

    if (type === "swatch") {
      const size = overlay ? "20px" : "32px";
      styles.gridTemplateColumns = `repeat(auto-fit, ${size})`;
      styles.gridAutoRows = size;
    } else {
      const size = overlay ? "24px" : "50px";
      styles.gridTemplateColumns = `repeat(auto-fit, ${size})`;
      styles.gridAutoRows = size;
    }

    return styles;
  }}

  gap: 8px;
`;

export const ColorAttr = styled.button`
  appearance: none;
  border: none;
  outline: none;
  background-color: ${({ color }) => color};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  box-shadow: ${({ active, disabled }) => active && !disabled && "0 0 0 1px #fff, 0 0 0 2px #5ece7b"};
`;

export const TextAttr = styled.button`
  appearance: none;
  border: none;
  outline: none;
  height: 100%;
  color: ${({ active, disabled }) => (active && !disabled ? "#fff" : "#A6A6A6")};
  background-color: ${({ active, disabled }) => (active && !disabled ? "#000" : "#fff")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border: 1px solid #a6a6a6;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "Source Sans Pro", sans-serif;
  overflow: hidden;
  text-overflow: clip;
`;

export const Title = styled.h4`
  color: #1d1f22;
  font-size: ${({ overlay }) => (overlay ? ".875rem" : "1.1rem")};
  font-weight: ${({ overlay }) => (overlay ? 400 : 700)};
  text-transform: uppercase;
`;

export const Price = styled.span`
  color: #1d1f22;
  font-size: ${({ overlay }) => (overlay ? "1rem" : "1.5rem")};
  font-weight: ${({ overlay }) => (overlay ? 500 : 700)};
`;

export const Button = styled.button`
  ${ButtonCommon}

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  padding: ${({ overlay }) => (overlay ? "0.2rem" : "0.5rem")};
  width: max-content;
`;

export const Wrapper = styled.div`
  grid-area: wrapper;
  display: grid;
  grid-template-columns: ${({ overlay }) => (overlay ? "25px" : "50px")} 1fr;
  grid-template-rows: 100%;
  position: sticky;
`;

export const Quantity = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const QuantityBtn = styled.button`
  appearance: none;
  outline: none;
  border: 1px solid #1d1f22;
  color: #1d1f22;
  background-color: #fff;
  cursor: pointer;
  flex: 0 0 ${({ overlay }) => (overlay ? "24px" : "45px")};
  width: ${({ overlay }) => (overlay ? "24px" : "45px")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QuantityValue = styled.div`
  font-size: ${({ overlay }) => (overlay ? "1rem" : "1.5rem")};
  font-weight: 500;
`;

export const Gallery = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Slides = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  height: 100%;
  transform: translateX(calc(${({ slide }) => `-${slide * 100}% - ${slide * 15}px`}));
  transition: transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
  width: 56px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Arrow = styled.button`
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.73);
`;
