import React, {useEffect} from "react";
import {ChatPageContainer} from "./chatPage.styles";

import {connect} from "react-redux";

import {
    createChatStart,
    updateContactSearchLine,
    setActiveChat,
    updateCurrentMessageTxt
} from "../../redux/chats/chats.actions";

import ContactsList from "../../components/contactsList/ContactsList.component";
import ChatSpace from "../../components/chatSpace/ChatSpace.component";

const ChatPage = ({activeChatId, chatList, currentSearchTxt, updateContactSearchTxt, contactSearchStart, setActiveChat, updateCurrentMessageTxt}) => {

    const activeChat = chatList.find(chat => chat.chatId === activeChatId);

    useEffect(() => {

    },[chatList])

    return(
        <ChatPageContainer>
            <ContactsList currentSearchTxt={currentSearchTxt}
                          updateContactSearchTxt={updateContactSearchTxt}
                          contactSearchStart={contactSearchStart}
                          chatList={chatList}
                          setActiveChat={setActiveChat}
            />
            <ChatSpace activeChatId={activeChatId} chatList={chatList} updateCurrentMessageTxt={updateCurrentMessageTxt} activeChat={activeChat}/>
        </ChatPageContainer>
    )
};

const mapStateToProps = state => ({
    currentSearchTxt: state.chats.currentSearchTxt,
    chatList: state.chats.chatList,
    activeChatId: state.chats.activeChatId
})

const mapDispatchToProps = dispatch => ({
    updateContactSearchTxt: (updatedTxt) => dispatch(updateContactSearchLine(updatedTxt)),
    contactSearchStart: (chatId) => dispatch(createChatStart(chatId)),
    setActiveChat: (chatId) => dispatch(setActiveChat(chatId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
