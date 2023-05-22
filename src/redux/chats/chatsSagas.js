import {takeLatest, call, put, all} from 'redux-saga/effects';
import {chatActionTypes} from "./chats.types";
import {
    sendMessageSuccess,
    sendMessageFail,
    receiveMessageSuccess,
    receiveMessageFail,
    deleteNotificationStart
} from "./chats.actions";
import {sendMsgAPI, receiveNotificationAPI, deleteNotificationAPI} from "../../utils/api";
import {MessageCls} from "../../utils/classes/messageCls";


export function* sendMessageAsync({payload}) {
    const {chatId, messageTxt, ID_INSTANCE, API_TOKEN} = payload;
    try {
        const sendResponse = yield sendMsgAPI(chatId, messageTxt, ID_INSTANCE, API_TOKEN);
        yield put(sendMessageSuccess(new MessageCls(sendResponse.data.idMessage, messageTxt, 'outgoing', chatId)))
    } catch (error) {
        yield put(sendMessageFail(error.message))
    }
}

export function* receiveNotificationAsync({payload}) {
    const {ID_INSTANCE, API_TOKEN} = payload
    try {
        const receiveNotificationResult = yield receiveNotificationAPI(ID_INSTANCE, API_TOKEN)
        if (receiveNotificationResult.data) {
            const {idMessage, messageData, senderData} = receiveNotificationResult.data.body
            yield put(receiveMessageSuccess(new MessageCls(idMessage, messageData.textMessageData.textMessage, 'incoming', senderData)))
            console.log(receiveNotificationResult)
            yield put(deleteNotificationStart(receiveNotificationResult.data.receiptId, ID_INSTANCE, API_TOKEN))
            yield deleteNotificationAPI(receiveNotificationResult.data.receiptId, ID_INSTANCE, API_TOKEN)
        }
        console.log('Нету')
    } catch (error) {
        yield put(receiveMessageFail(error))
    }
}

export function* deleteNotificationAsync(receiptId) {
    try {
        const receiveDeletingResult = yield deleteNotificationAPI(receiptId)
        console.log('hi')
    } catch (error) {
        console.log(error)
    }
}


export function* sendMessageStart() {
    yield takeLatest(chatActionTypes.SEND_MESSAGE_START, sendMessageAsync)
}

export function* receiveNotificationStart() {
    yield takeLatest(chatActionTypes.RECEIVE_MESSAGE_START, receiveNotificationAsync)
}

export function* deleteNotificationStartAsync() {
    yield takeLatest(chatActionTypes.DELETING_NOTIFICATION_START, deleteNotificationAsync)
}


export function* chatSaga() {
    yield all([call(sendMessageStart), call(receiveNotificationStart), call(deleteNotificationStartAsync)])
}
