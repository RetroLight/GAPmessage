import {combineReducers} from "redux";
import chatsReducer from "./chats/chats.reducer";

import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['chats']
}

const rootReducer = combineReducers({
    chats: chatsReducer
})

export default persistReducer(persistConfig, rootReducer);
