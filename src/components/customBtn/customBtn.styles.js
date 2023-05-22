import styled from "styled-components";
import '../../constant.styles.css'

export const CustomBtnContainer = styled.button`
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  background-color: var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(120%);
  }
  span {
    color: var(--white-color);
    font-weight: 500;
  }
`
