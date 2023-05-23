import React, {useEffect} from "react";
import './App.css';
import {connect} from "react-redux";

import {receiveMessageStart, updateCurrentAPIToken, updateCurrentIdInstance, loggingIn} from "./redux/chats/chats.actions";

import ChatPage from "./pages/chatPage/ChatPage.component";
import Popup from "./components/popup/Popup.component";
import CustomInput from "./components/customInput/CustomInput.component";

function App({isLoggedIn, loggingInHandler, ID_INSTANCE, API_TOKEN, receiveNotification, updateCurrentIdInstance, updateCurrentAPIToken}) {

    useEffect(() => {
        setInterval(() => {
            receiveNotification(ID_INSTANCE, API_TOKEN)
        }, 7000)
    },[])

    const handleChangeIdInstance = (event) => {
        updateCurrentIdInstance(event.target.value)
    }
    const handleChangeAPIToken = (event) => {
        updateCurrentAPIToken(event.target.value)
    }

    return (
        <div className="App">
            {isLoggedIn ? <ChatPage/> : <Popup handleChangeIdInstance={handleChangeIdInstance}
                                               handleChangeAPIToken={handleChangeAPIToken}
                                               headerTitle='Введите ваши данные'
                                               btnHandler={loggingInHandler}
                                               btnLabel='Войти'>
                <CustomInput type='text' handleChange={handleChangeIdInstance} placeholder='ID_INSTANCE' value={ID_INSTANCE}/>
                <CustomInput type='text' handleChange={handleChangeAPIToken} placeholder='API_TOKEN' value={API_TOKEN}/>
            </Popup>}
        </div>
    );
}

const mapStateToProps = state => ({
    ID_INSTANCE: state.chats.ID_INSTANCE,
    API_TOKEN: state.chats.API_TOKEN,
    isLoggedIn: state.chats.isLoggedIn
})
const mapDispatchToProps = dispatch => ({
    loggingInHandler: () => dispatch(loggingIn()),
    receiveNotification: (ID_INSTANCE, API_TOKEN) => dispatch(receiveMessageStart(ID_INSTANCE, API_TOKEN)),
    updateCurrentIdInstance: (idInstanceTxt) => dispatch(updateCurrentIdInstance(idInstanceTxt)),
    updateCurrentAPIToken: (tokenTxt) => dispatch(updateCurrentAPIToken(tokenTxt))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
