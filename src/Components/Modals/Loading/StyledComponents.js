import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(57, 55, 72, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Pulse = keyframes`
0%, 40%, 100% {
    transform: scaleY(0.3);
}
20% {
    transform: scaleY(1);
}
`;

export const Rectangle = styled.div`
  flex: 0 0 10px;
  height: 100%;
  background-color: #5ece7b;
  animation: ${Pulse} 1200ms infinite ease-in-out;
`;

export const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  ${({ pins }) => {
    const styles = [...Array(pins).keys()].map((i) => {
      return `& ${Rectangle}:nth-of-type(${i + 1}) {animation-delay: -${1200 - 100 * i}ms;}`;
    });

    styles.push(`width: ${10 * pins + 30}px`);

    return styles;
  }}
`;
