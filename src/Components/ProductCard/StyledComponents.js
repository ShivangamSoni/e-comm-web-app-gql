import styled from "styled-components";

export const Button = styled.button`
  appearance: none;
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: #5ece7b;
  width: 33px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -35px;
  right: 10px;
  transform: scale(0);
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: 20px;
  padding: 15px;
  background-color: #fff;
  position: relative;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

    & Button {
      transform: scale(1);
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #8d8f9a;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: #c4c4c47f;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
`;

export const Info = styled.div`
  position: relative;
`;

export const Title = styled.p`
  color: #1d1f22;
  font-weight: 300;
  font-size: 1rem;
  cursor: pointer;
`;

export const Price = styled.span`
  color: #1d1f22;
  font-weight: 600;
  font-size: 1rem;
`;
