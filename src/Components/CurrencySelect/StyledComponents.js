import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
`;

export const SelectHeader = styled.div`
  padding-right: 20px;
  padding-left: 5px;
  width: 45px;
  position: relative;
  cursor: pointer;

  &::after {
    content: "\u2304";
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SelectedTitle = styled.span`
  font-size: 0.9rem;
`;

export const SelectBody = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  z-index: 10;
  list-style: none;
  width: 250%;
  background-color: #fff;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.2));
`;

export const SelectOption = styled.li`
  padding: 5px;
  padding-left: 10px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover {
    background-color: rgba(238, 238, 238, 1);
  }

  span {
    pointer-events: none;
    font-size: 0.9rem;
    font-weight: 500;
  }

  span + span {
    margin-left: 10px;
  }
`;
