import axios from "axios";


export const sendMsgAPI = async (chatId, messageTxt, ID_INSTANCE, API_TOKEN) => {
    return await axios({
        method: 'post',
        url: `https://api.green-api.com/waInstance${ID_INSTANCE}/SendMessage/${API_TOKEN}`,
        data: {
            'chatId': `${chatId}`,
            'message': `${messageTxt}`
        }
    }).then(function (response) {
        return response
    })
}

export const receiveNotificationAPI = async (ID_INSTANCE, API_TOKEN) => {
    return await axios({
        method: 'get',
        url: `https://api.green-api.com/waInstance${ID_INSTANCE}/ReceiveNotification/${API_TOKEN}`
    }).then(function (response) {
        return response
    })
}

export const deleteNotificationAPI = async (receiptId, ID_INSTANCE, API_TOKEN) => {
    return await axios({
        method: 'delete',
        url: `https://api.green-api.com/waInstance${ID_INSTANCE}/DeleteNotification/${API_TOKEN}/${receiptId}`
    }).then(function(response) {
        return response
    })
}
