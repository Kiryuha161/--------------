const SEND_MESSAGE = 'ADD-MESSAGE';

export const messageReducer = (state, action) => {
    let messageId = state.messagesData.length + 1;
    
    if (action.type === SEND_MESSAGE) {
        let newMessage = {
            text: action.text,
            id: messageId,
            date: Date.now,
            sender: "Кирилл",
            image: "https://android-obzor.com/wp-content/uploads/2022/03/28e4ac42f547e6ac0f50f7cfa916ca93.jpg",
            isMe: true
        }

        messageId++;
        state.messagesData.push(newMessage);
    }
    
    return state;
}

export const sendMessageActionCreator = (text) => {
    return {
        type: SEND_MESSAGE,
        text: text
    }
}