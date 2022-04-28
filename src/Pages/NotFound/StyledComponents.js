import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 70vh;
`;

const animateText = keyframes`
 0% {
    background-position: 0 0;
  }
  25% {
    background-position: 100% 0;
  }
  50% {
    background-position: 100% 100%;
  }
  75% {
    background-position: 0 100%;
  }
  100% {
    background-position: 0 0;
  }
`;

const infoTitleAfter = css`
  position: absolute;
  inset: 0;
  color: transparent;
  background: repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6);
  background-clip: text;
  background-size: 400%;
  text-shadow: 1px 1px 2px #ffffff40;
  animation: ${animateText} 10000ms ease-in-out infinite;
`;

export const Title = styled.h2`
  font-size: 10rem;
  font-weight: bold;
  position: relative;
  margin: 0;
  padding: 0;
  &::after {
    ${infoTitleAfter};
    background-color: transparent;
    content: "${({ content }) => content}";
  }
`;

export const Info = styled.p`
  color: #584e4e;
  font-size: 3rem;
  font-weight: bold;
  position: relative;
  text-transform: uppercase;
  &::after {
    ${infoTitleAfter}
    content: "${({ content }) => content}";
  }
`;
