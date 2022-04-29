import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 10px;
  height: 100%;

  .link {
    display: block;
    text-decoration: none;
    text-transform: Uppercase;
    color: #1d1f22;
    font-size: 1rem;
    font-weight: 400;
    padding: 0 20px;
    position: relative;
    transition: color 300ms linear;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #5ece7b;
      transform-origin: left;
      transform: scaleX(0);
      transition: transform 500ms linear;
    }

    &.active,
    &:hover {
      color: #5ece7b;
      font-weight: 600;
    }

    &.active::after {
      transform: scaleX(1);
    }
  }
`;
