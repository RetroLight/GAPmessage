import styled from "styled-components";
import {InputContainer} from "../customInput/customInput.styles";

export const ContactListContainer = styled.div`

`

export const UserHeaderContainer = styled.div`
  .accImgContainer {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .accNumber {
    
  }
`

export const UserSearchContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  ${InputContainer} {
    width: 90%;
    margin-right: 10px;
  }
  .searchContactBtn {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
`

export const ItemsContainer = styled.div`
  
`
