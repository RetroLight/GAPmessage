import React from "react";
import {CustomBtnContainer} from "./customBtn.styles";

const CustomBtn = ({btnLabel, handleClick}) => {
    return (
        <CustomBtnContainer onClick={handleClick}>
            <span>{btnLabel}</span>
        </CustomBtnContainer>
    )
};

export default CustomBtn;
