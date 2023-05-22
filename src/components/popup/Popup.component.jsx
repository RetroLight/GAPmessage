import React from "react";
import {PopupContainer, PopupWindow, PopupHeader, PopupContent, PopupButtonBlock} from "./popup.styles";

import CustomBtn from "../customBtn/CustomBtn.component";

const Popup = ({btnHandler, headerTitle, btnLabel, handleChangeIdInstance, handleChangeAPIToken, value, ...props}) => {

    return (
        <PopupContainer>
            <PopupWindow>
                <PopupHeader>
                    {headerTitle}
                </PopupHeader>
                <PopupContent>
                    {props.children}
                </PopupContent>
                <PopupButtonBlock>
                    <CustomBtn handleClick={btnHandler} btnLabel={btnLabel}/>
                </PopupButtonBlock>
            </PopupWindow>
        </PopupContainer>
    )
}

export default Popup;
