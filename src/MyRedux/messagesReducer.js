const SEND_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messagesData: [
        { text: "Привет, как ты?", id: 1, date: "20/12/2023", sender: "Кирилл", image: "https://android-obzor.com/wp-content/uploads/2022/03/28e4ac42f547e6ac0f50f7cfa916ca93.jpg", isMe: true},
        { text: "Да, нормально, ты как?", id: 2, date: "21/12/2023", sender: "Кристина", image: "https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg", isMe: false},
        { text: "Ничего, пойдёт. Что делаешь?", id: 3, date: "21/12/2023", sender: "Кирилл", image: "https://android-obzor.com/wp-content/uploads/2022/03/28e4ac42f547e6ac0f50f7cfa916ca93.jpg", isMe: true}
    ],
    myFriendList: [
        { name: "Кристина", surname: "Парамонова", avatar: "https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg", id: 1 },
        { name: "Александр", surname: "Шалюта", avatar: "https://avatars.mds.yandex.net/i?id=942c7ec326e1417319c99b4bbbf9aebc0613138c-9998293-images-thumbs&n=13", id: 2 },
        { name: "Игорь", surname: "Касымов", avatar: "https://pic.rutubelist.ru/video/46/b2/46b25de0bf3d3fa60a22037e55071354.jpg", id: 3 },
        { name: "Михаил", surname: "Аветисов", avatar: "https://pixelbox.ru/wp-content/uploads/2021/10/dark-avatar-vk-pixelbox.ru-2.jpg", id: 4 },
        { name: "Андрей", surname: "Палей", avatar: "https://android-obzor.com/wp-content/uploads/2022/03/2729447955.jpg", id: 5 },
        { name: "Алексей", surname: "Андреев", avatar: "https://pushinka.top/uploads/posts/2023-04/1681748312_pushinka-top-p-klassnie-avatarki-dlya-stima-vkontakte-34.jpg", id: 6 },
        { name: "Роман", surname: "Бобрешов", avatar: "https://tipik.ru/wp-content/uploads/2019/05/Волк-картинки-скачать-на-телефон-крутые-заставки-6.jpg", id: 7 },
        { name: "Андрей", surname: "Алексеев", avatar: "https://sneg.top/uploads/posts/2023-06/1687931407_sneg-top-p-prikolnie-avatarki-dlya-malchikov-vkontakt-5.jpg", id: 8 },
        { name: "Кирилл", surname: "Парамонов", avatar: "https://android-obzor.com/wp-content/uploads/2022/03/28e4ac42f547e6ac0f50f7cfa916ca93.jpg", id: 9 }
    ] 
}

export const messageReducer = (state = initialState, action) => {
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

        messageId++; //потом проверить и если надо убрать
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