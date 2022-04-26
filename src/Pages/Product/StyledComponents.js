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
`;

export const Tile = styled.div``;

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
  gap: 30px;
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

export const Section = styled.div``;

export const AttrWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 50px);
  grid-template-rows: 50px;
  gap: 10px;
  height: 50px;
`;

export const ColorAttr = styled.div`
  background-color: ${({ color }) => color};
  height: 100%;
`;

export const TextAttr = styled.button``;

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
  cursor: pointer;
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
