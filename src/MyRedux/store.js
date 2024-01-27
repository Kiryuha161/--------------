import { messageReducer } from "./messagesReducer";
import { myFriendPageReducer } from "./myFriendPageReducer";
import { profileReducer } from "./profileReducer";
import { sidebarReducer} from "./sidebarReducer";

let store = {
    _state: {
        myInfo: {
            name: "Кирилл",
            surname: "Парамонов",
            dateOfBirth: "25/03/1993",
            education: "Высшее",
            cite: "vk.com",
            city: "Ростов-на-Дону",
            avatar: "https://sun9-37.userapi.com/impf/c850132/v850132268/aa75b/UWVuTLspDPA.jpg?size=1280x768&quality=96&sign=07e29460571e3eaa7b1be5e5ed068070&c_uniq_tag=aUII7MLn3Aw3A1e9NoagdHZU4BOvyoZ4FYhRubXruLs&type=album"
        },
        profile: {
            posts: [
                { post: "Салют, народ. Как дела?", id: 1, likeCount: 6, commentCount: 0, hadLike: false },
                { post: "Ну что, погнали, нах?", id: 2, likeCount: 24, commentCount: 3, hadLike: false }
            ]
        },
        messages: {
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
        },
        sidebar: {
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
        },
        myFriendPage: {
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
    },
    _callSubscriber() {
        console.log("Перерисовка произошла");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { 
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messages = messageReducer(this._state.messages, action);
        this._state.myFriendPage = myFriendPageReducer(this._state.myFriendPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();
    }
       
}

window.store = store;
export default store;





  

  
