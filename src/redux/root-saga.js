import {call, all} from 'redux-saga/effects';
import {chatSaga} from "./chats/chatsSagas";

export function* rootSaga() {
    yield all([call(chatSaga)])
};
