let state = {
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
            { name: "Андрей", id: 1 }, 
            { name: "Сергей", id: 2 }, 
            { name: "Владимир", id: 3 }, 
            { name: "Александр", id: 4 }, 
            { name: "Борис", id: 5 }, 
            { name: "Евгений", id: 6 }, 
            { name: "Илья", id: 7 }
        ]
    }
};

export default state;


  

  
