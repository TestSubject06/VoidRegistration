import styled from "styled-components";

export const Button = styled.button`
  padding: 5px;
  font-weight: 800;
  text-transform: uppercase;
  background-color: #d4c26a;
  border: 1px solid #806d15;
  border-radius: 3px;
  width: 100%;

  &[disabled] {
    opacity: 0.6;
  }

  &:active {
    background-color: #aa9739;
    border: 1px solid #806d15;
  }

  &:hover:not([disabled]):not(:active) {
    background-color: #fff0aa;
    border: 1px solid #d4c26a;
  }

  &:hover:not([disabled]) {
    cursor: pointer;
    &:after {
      content: " to the V̵̦̀O̶̩͠Ǐ̶͖D̶̼͘";
    }
  }
`;
Button.displayName = "Button";
