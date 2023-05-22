import {chatActionTypes} from "./chats.types";
import {ChatItem} from "../../utils/classes/chatItem";

const INITIAL_STATE = {
    chatList: [],
    currentSearchTxt: '',
    currentMessageTxt: '',
    ID_INSTANCE: undefined,
    API_TOKEN: undefined,
    isLoggedIn: false,
    activeChatId: undefined,
    messageSent: undefined,
    error: ''
};

const chatsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case chatActionTypes.LOGGING_IN_START:
            return {
                ...state,
                isLoggedIn: true
            }
        case chatActionTypes.UPDATE_CURRENT_ID_INSTANCE:
            return {
                ...state,
                ID_INSTANCE: action.payload
            }
        case chatActionTypes.UPDATE_CURRENT_API_TOKEN:
            return {
                ...state,
                API_TOKEN: action.payload
            }
        case chatActionTypes.UPDATE_CURRENT_SEARCH_LINE:
            return {
                ...state,
                currentSearchTxt: action.payload
            }
        case chatActionTypes.CREATE_CHAT_START:
            const newChatItm = new ChatItem(action.payload)
            return {
                ...state,
                chatList: [...state.chatList, newChatItm],
                currentSearchTxt: ''
            }
        case chatActionTypes.SET_ACTIVE_CHAT:
            return ({
                ...state,
                activeChatId: action.payload
            })
        case chatActionTypes.UPDATE_CURRENT_CHAT_MESSAGE:
            return {
                ...state,
                currentMessageTxt: action.payload
            }
        case chatActionTypes.SEND_MESSAGE_SUCCESS:
            const updatedChat = state.chatList.find(chat => chat.chatId === state.activeChatId);
            updatedChat.chatMessagesList.push(action.payload)
            return {
                ...state,
                chatList: [...state.chatList.map(chat => chat.chatId === state.activeChatId ? updatedChat : chat)],
                currentMessageTxt: '',
                error: ''
            }
        case chatActionTypes.SEND_MESSAGE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case chatActionTypes.RECEIVE_MESSAGE_SUCCESS:
            const updatedChatNewMsg = state.chatList.find(chat => chat.chatId === action.payload.chatId.chatId);
            updatedChatNewMsg.chatMessagesList.push(action.payload);
            return {
                ...state,
                chatList: [...state.chatList.map(chat => chat.chatId === action.payload.chatId.chatId ? updatedChatNewMsg : chat)],
                error: ''
            }
        default: return state
    }
}

export default chatsReducer;
