import React from "react";
import {MessageItemContainer} from "./messageItem.styles";

const MessageItem = ({...props}) => {
    const {messageTxt, messageTime, source} = props;
    return (
        <MessageItemContainer source={source}>
            <span>{messageTxt}</span>
            <span className='messageTime'>{messageTime}</span>
        </MessageItemContainer>
    )
}

export default MessageItem;
