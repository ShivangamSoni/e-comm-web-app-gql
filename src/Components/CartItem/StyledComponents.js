import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 300px auto;
  grid-template-areas:
    "info wrapper"
    "info .";
  gap: 50px;
  padding: 10px 0;

  & + & {
    border-top: 1px solid #e5e5e5;
  }
`;

export const Info = styled.div`
  grid-area: info;
  display: grid;
  grid-auto-rows: minmax(auto, max-content);
  gap: 10px;
`;

export const Brand = styled.h2`
  color: #1d1f22;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const Name = styled.h3`
  color: #1d1f22;
  font-size: 1.8rem;
  font-weight: 400;
`;

export const Section = styled.div`
  display: grid;
`;

export const AttrWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${({ type }) => (type === "swatch" ? "32px" : "minmax(50px, auto)")});
  grid-auto-rows: ${({ type }) => (type === "swatch" ? "32px" : "50px")};
  gap: 10px;
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
`;

export const Title = styled.h4`
  color: #1d1f22;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Price = styled.span`
  color: #1d1f22;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Button = styled.button`
  appearance: none;
  border: none;
  padding: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  padding: 0.7rem 1rem;
  background-color: #5ece7b;
  width: max-content;
`;

export const Wrapper = styled.div`
  grid-area: wrapper;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 100%;
  gap: 5px;

  outline: 1px solid red;
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
  flex: 0 0 45px;
  width: 45px;
`;

export const QuantityValue = styled.div`
  font-size: 1.5rem;
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
