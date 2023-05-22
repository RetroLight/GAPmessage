import React from "react";
import {ContactImgContainer, ContactItmContainer} from "./contactItem.styles";

const ContactItem = ({onClick, lastMessageTxt, lastMessageTime, contactName, contactTel, contactCountry}) => {

    const textCut = (text) => {
        let sliced = text.slice(0, 25);
        if (sliced.length < text.length) {
            sliced += '...';
        }
        return sliced
    }
    return (
        <ContactItmContainer onClick={() => onClick(contactTel)}>
            <ContactImgContainer>
                <img src={require('../../img/user.png')} alt=""/>
            </ContactImgContainer>
            <div className='contactPreviewContainer'>
                <div>
                    <span className='contactNameVal'>+{contactTel}</span>
                    <span className='latestMsgTime'>{lastMessageTime}</span>
                </div>
                <div>
                    {lastMessageTxt ? textCut(lastMessageTxt) : ''}
                </div>
            </div>
        </ContactItmContainer>
    )
}

export default ContactItem;
