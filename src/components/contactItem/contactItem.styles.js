import styled from "styled-components";
import '../../constant.styles.css';

export const ContactItmContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-bottom: var(--dark-border);
  color: var(--white-color);
  cursor: pointer;
  &:hover {
    background: var(--middle-dark-color);
  }
  &.active {
    background-color: var(--bright-dark-color);
  }
  .contactPreviewContainer {
    width: 100%;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
`

export const ContactImgContainer = styled.div`
  border-radius: 50px;
  overflow: hidden;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`
