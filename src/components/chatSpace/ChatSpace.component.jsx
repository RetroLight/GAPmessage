import React, {useEffect, useState} from "react";
import {
    BottomInputBlock,
    ChatSpaceBackground,
    ChatSpaceContainer, EmptyChatSpace,
    HeaderChatSpace,
    MessagesSpace
} from "./chatSpace.styles";
import {connect} from "react-redux";

import {updateCurrentMessageTxt, sendMessageStart, loggingIn} from "../../redux/chats/chats.actions";

import CustomInput from "../customInput/CustomInput.component";
import CustomBtn from "../customBtn/CustomBtn.component";
import MessageItem from "../messageItem/MessageItem.component";

const ChatSpace = ({ID_INSTANCE, API_TOKEN, activeChatId, currentMessageTxt, updateCurrentMessageTxt, sendMessageStart, chatList}) => {
    const[messagesList, setMessagesList] = useState([])
    let activeChat;
    const messagesEndRef = React.createRef()

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView()
    }
    useEffect(() => {
        if(activeChatId) {
            activeChat = chatList.find(chat => chat.chatId === activeChatId)
            setMessagesList(activeChat.chatMessagesList)
            scrollToBottom()
        }
    },[activeChatId, messagesList, chatList])

    const handleChange = (event) => {
        updateCurrentMessageTxt(event.target.value)
    }

    if (!activeChatId) {
        return (
            <EmptyChatSpace>
                <span>Выберите чат</span>
            </EmptyChatSpace>
        )
    } else {
        return (
            <ChatSpaceContainer>
                <ChatSpaceBackground/>
                <HeaderChatSpace>
                </HeaderChatSpace>
                <MessagesSpace>
                    {messagesList.map(message => <MessageItem key={message.messageId}
                                                              messageTxt={message.messageTxt}
                                                              messageTime={message.messageTime}
                                                              source={message.sourceType}
                    />)}
                    <div ref={messagesEndRef} />
                </MessagesSpace>
                <BottomInputBlock>
                    <CustomInput type='text' placeholder='Текст сообщения' handleChange={handleChange}
                                 value={currentMessageTxt}/>
                    <CustomBtn handleClick={() => sendMessageStart(activeChatId, currentMessageTxt, ID_INSTANCE, API_TOKEN)}
                               btnLabel='Отправить'/>
                </BottomInputBlock>
            </ChatSpaceContainer>
        )
    }
}

const mapStateToProps = state => ({
    currentMessageTxt: state.chats.currentMessageTxt,
    ID_INSTANCE: state.chats.ID_INSTANCE,
    API_TOKEN: state.chats.API_TOKEN
})

const mapDispatchToProps = dispatch => ({
    updateCurrentMessageTxt: (messageTxt) => dispatch(updateCurrentMessageTxt(messageTxt)),
    sendMessageStart: (chatId, messageTxt, ID_INSTANCE, API_TOKEN) => {
        dispatch(sendMessageStart({chatId, messageTxt, ID_INSTANCE, API_TOKEN}))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatSpace);
