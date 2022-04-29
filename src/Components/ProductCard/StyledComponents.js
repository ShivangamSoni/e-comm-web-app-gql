import styled from "styled-components";
import { ButtonCommon } from "../../CommonStyles";

export const Button = styled.button`
  ${ButtonCommon}

  padding: 0;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -50px;
  right: 10px;
  transform: scale(0);
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 60px;
  gap: 24px;
  background-color: #fff;
  padding: 16px;
  position: relative;
  cursor: pointer;

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
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 90%;
  object-fit: contain;
`;

export const Info = styled.div`
  position: relative;
`;

export const Title = styled.p`
  color: #1d1f22;
  font-size: 1.125rem;
  font-weight: 300;
  height: 29px;
`;

export const Price = styled.span`
  color: #1d1f22;
  font-size: 1.125rem;
  font-weight: 500;
  height: 29px;
`;
