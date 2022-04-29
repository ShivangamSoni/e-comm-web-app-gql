import styled from "styled-components";

import ArrowDown from "../../Assets/arrow-down.svg";
import ArrowUp from "../../Assets/arrow-up.svg";

export const SelectContainer = styled.div`
  position: relative;
`;

export const SelectHeader = styled.div`
  padding-right: 20px;
  width: max-content;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    background-image: url(${({ isOpen }) => (isOpen ? ArrowUp : ArrowDown)});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }
`;

export const SelectedTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
`;

export const SelectBody = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  z-index: 10;
  list-style: none;
  width: max-content;
  background-color: #fff;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
`;

export const SelectOption = styled.li`
  padding: 20px 40px 13px 20px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover {
    background-color: #eeeeee;
  }
`;

export const OptionText = styled.div`
  pointer-events: none;
  pointer-events: none;
  font-size: 1.125rem;
  font-weight: 500;
`;
