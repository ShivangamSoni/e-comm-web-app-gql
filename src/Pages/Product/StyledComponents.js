import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 500px auto;
  grid-template-areas:
    "gallery info"
    ". info";
  gap: 10px;
`;

export const Gallery = styled.div`
  grid-area: gallery;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 100%;
  gap: 10px;
`;

export const ShowCase = styled.div`
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 150px;
  gap: 3px;
`;

export const Tile = styled.div`
  cursor: pointer;
`;

export const SelectedImage = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-position: ${({ contain }) => (contain ? "center center" : "top center")};
  object-fit: ${({ contain }) => (contain ? "contain" : "cover")};
`;

export const Info = styled.div`
  grid-area: info;
  display: grid;
  grid-auto-rows: minmax(auto, max-content);
  gap: 40px;
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
  gap: 5px;
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
`;

export const Description = styled.div`
  & * {
    padding: revert;
  }
`;
