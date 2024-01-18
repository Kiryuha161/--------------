let store = {
    _state: {
        profile: {
            posts: [
                { post: "Салют, народ. Как дела?", id: 1, likeCount: 6, commentCount: 0 },
                { post: "Ну что, погнали, нах?", id: 2, likeCount: 24, commentCount: 3 }
            ]
        },
        messages: {
            messagesData: [
                { text: "Привет, как ты?", id: 1, date: "20/12/2023", sender: "Кирилл", image: "https://cdn.onlinewebfonts.com/svg/download_34728.png" },
                { text: "Да, нормально, ты как?", id: 2, date: "21/12/2023", sender: "Сергей", image: "https://cdn.onlinewebfonts.com/svg/download_34728.png" },
                { text: "Ничего, пойдёт. Что делаешь?", id: 3, date: "21/12/2023", sender: "Кирилл", image: "https://cdn.onlinewebfonts.com/svg/download_34728.png" }
            ],
            friendListData: [
                { name: "Андрей", id: 1 },
                { name: "Сергей", id: 2 },
                { name: "Владимир", id: 3 },
                { name: "Александр", id: 4 },
                { name: "Борис", id: 5 },
                { name: "Евгений", id: 6 },
                { name: "Илья", id: 7 }
            ]
        },
        sidebar: {
            myFriendList: [
                { name: "Кристина", surname: "Парамонова", avatar: "https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg", id: 1 },
                { name: "Александр", surname: "Шалюта", avatar: "https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg", id: 2 },
                { name: "Игорь", surname: "Касымов", avatar: "https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg", id: 3 },
                { name: "Михаил", surname: "Аветисов", avatar: "https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg", id: 4 },
                { name: "Андрей", surname: "Палей", avatar: "https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg", id: 5 },
                { name: "Алексей", surname: "Андреев", avatar: "https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg", id: 6 },
                { name: "Роман", surname: "Бобрешов", avatar: "https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg", id: 7 },
                { name: "Андрей", surname: "Алексеев", avatar: "https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg", id: 8 },
                { name: "Кирилл", surname: "Парамонов", avatar: "https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg", id: 9 }
            ]
        }
    },
    /* postId: 3, */
    _callSubscriber() {
        console.log("Перерисовка произошла");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    addPost(postMessage) {
        let newPost = {
            post: postMessage,
            id: 3,
            //id: this.postId,
            likeCount: 0,
            commentCount: 0
        }
        
        //this.postId++;
        this._state.profile.posts.push(newPost);
        this._callSubscriber();
    }
}

window.store = store;
export default store;



  

  
