import {chatActionTypes} from "./chats.types";

export const updateContactSearchLine = (updatedTxt) => ({
    type: chatActionTypes.UPDATE_CURRENT_SEARCH_LINE,
    payload: updatedTxt
})

export const createChatStart = (chatId) => ({
    type: chatActionTypes.CREATE_CHAT_START,
    payload: chatId
})

export const setActiveChat = (chatId) => ({
    type: chatActionTypes.SET_ACTIVE_CHAT,
    payload: chatId
})


// ---------------Input text action creators---------------
export const updateCurrentMessageTxt = (messageTxt) => ({
    type: chatActionTypes.UPDATE_CURRENT_CHAT_MESSAGE,
    payload: messageTxt
})
export const updateCurrentIdInstance = (instanceTxt) => ({
    type: chatActionTypes.UPDATE_CURRENT_ID_INSTANCE,
    payload: instanceTxt
})
export const updateCurrentAPIToken = (tokenTxt) => ({
    type: chatActionTypes.UPDATE_CURRENT_API_TOKEN,
    payload: tokenTxt
})
// ---------------Input text action creators---------------

export const loggingIn = () => ({
    type: chatActionTypes.LOGGING_IN_START
})


export const sendMessageStart = ({chatId, messageTxt, ID_INSTANCE, API_TOKEN}) => ({
    type: chatActionTypes.SEND_MESSAGE_START,
    payload: {chatId, messageTxt, ID_INSTANCE, API_TOKEN}
})
export const sendMessageSuccess = (messageObj) => ({
    type: chatActionTypes.SEND_MESSAGE_SUCCESS,
    payload: messageObj
})
export const sendMessageFail = (error) => ({
    type: chatActionTypes.SEND_MESSAGE_FAILURE,
    payload: error
})

export const receiveMessageStart = (ID_INSTANCE, API_TOKEN) => ({
    type: chatActionTypes.RECEIVE_MESSAGE_START,
    payload: {ID_INSTANCE, API_TOKEN}
})
export const receiveMessageSuccess = (notificationObj) => ({
    type: chatActionTypes.RECEIVE_MESSAGE_SUCCESS,
    payload: notificationObj
})
export const receiveMessageFail = (error) => ({
    type: chatActionTypes.RECEIVE_MESSAGE_SUCCESS,
    payload: error
})

export const deleteNotificationStart = (receiptId) => ({
    type: chatActionTypes.DELETING_NOTIFICATION_START,
    payload: receiptId
})
export const deleteNotificationSuccess = (notificationObj) => ({
    type: chatActionTypes.DELETING_NOTIFICATION_SUCCESS,
    payload: notificationObj
})
export const deleteNotificationFail = (error) => ({
    type: chatActionTypes.DELETING_NOTIFICATION_FAILURE,
    payload: error
})
