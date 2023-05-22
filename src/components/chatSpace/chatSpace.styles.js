import styled from "styled-components";
import '../../constant.styles.css';
import chatBackground from '../../img/chatBg.png';
import {InputContainer} from "../customInput/customInput.styles";
import {CustomBtnContainer} from "../customBtn/customBtn.styles";

export const EmptyChatSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #bdbdbd;
  font-size: 20px;
  font-weight: bolder;
`

export const ChatSpaceContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`
export const ChatSpaceBackground = styled.div`
  background: url(${chatBackground});
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100%;
  opacity: 0.06;
  position: absolute;
  top: 0;
  left: 0;
  @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 2dppx) {
    background-size: 412.5px 749.25px;
  }
`

export const HeaderChatSpace = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  background-color: var(--middle-dark-color);
  width: 100%;
  z-index: 10;
`
export const MessagesSpace = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 80px;
  z-index: 1;
`

export const BottomInputBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 14px 14px;
  background-color: var(--middle-dark-color);
  width: 100%;
  display: flex;
  z-index: 10;

  ${InputContainer} {
    background-color: var(--bright-dark-color);
    width: 90%;
  }

  ${CustomBtnContainer} {
    margin-left: auto;
    margin-right: 0;
  }
`
