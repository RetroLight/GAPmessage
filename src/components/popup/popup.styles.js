import styled from "styled-components";
import '../../constant.styles.css'
import {InputContainer} from "../customInput/customInput.styles";
import {CustomBtnContainer} from "../customBtn/customBtn.styles";

export const PopupContainer = styled.div`
  background-color: #0000008c;
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PopupWindow = styled.div`
  padding: 40px;
  background-color: var(--main-dark-color);
  height: 400px;
  width: 600px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const PopupHeader = styled.div`
  color: var(--white-color);
  font-size: 18px;
`

export const PopupContent = styled.div`
  ${InputContainer}:first-child {
    margin-top: 0px;
  }

  ${InputContainer} {
    margin-top: 20px;
  }
`

export const PopupButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  ${CustomBtnContainer} {
    width: 40%;
    font-size: 20px;
  }
`
