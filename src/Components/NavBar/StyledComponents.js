import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  .link {
    display: block;
    text-decoration: none;
    text-transform: Uppercase;
    color: #1d1f22;
    font-size: 1rem;
    font-weight: 400;
    padding: 0 10px 12px;
    position: relative;
    transition: color 300ms linear;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
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
    }

    &.active::after {
      transform: scaleX(1);
    }
  }
`;
