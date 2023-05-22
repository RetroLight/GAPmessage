export class MessageCls {
    constructor(messageId, messageTxt, sourceType, chatId) {
        this.messageId = messageId;
        this.messageTxt = messageTxt;
        this.messageTime = this.getTime();
        this.sourceType = sourceType;
        this.chatId = chatId;
    }
    addZero(number) {
        return ('0' + number).slice(-2)
    };
    getTime() {
        const data = new Date();
        let currentTime = this.addZero(data.getHours()) + ":" + this.addZero(data.getMinutes());
        return currentTime;
    }
}
