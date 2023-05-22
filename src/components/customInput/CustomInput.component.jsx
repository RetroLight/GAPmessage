import React from "react";
import {InputContainer} from "./customInput.styles";

const CustomInput = ({type, placeholder, handleChange, value}) => {
    return (
        <InputContainer>
            <input type={type} placeholder={placeholder} onChange={handleChange} value={value}/>
        </InputContainer>
    )
};

export default CustomInput;
