const ADD_POST = 'ADD-POST';
const LIKE_IT = 'LIKE-IT'

let initialState = {
    posts: [
        { post: "Салют, народ. Как дела?", id: 1, likeCount: 6, commentCount: 0, hadLike: false },
        { post: "Ну что, погнали, нах?", id: 2, likeCount: 24, commentCount: 3, hadLike: false }
    ],
    myInfo: {
        name: "Кирилл",
        surname: "Парамонов",
        dateOfBirth: "25/03/1993",
        education: "Высшее",
        cite: "vk.com",
        city: "Ростов-на-Дону",
        avatar: "https://sun9-37.userapi.com/impf/c850132/v850132268/aa75b/UWVuTLspDPA.jpg?size=1280x768&quality=96&sign=07e29460571e3eaa7b1be5e5ed068070&c_uniq_tag=aUII7MLn3Aw3A1e9NoagdHZU4BOvyoZ4FYhRubXruLs&type=album"
    }
}

export const profileReducer = (state = initialState, action) => {
    let postId = state.posts.length + 1;
    
    if (action.type === ADD_POST) {
        let newPost = {
            post: action.post,
            id: postId,
            likeCount: 0,
            commentCount: 0
        }
        
        postId++;
        state.posts.push(newPost);
    } else if (action.type === LIKE_IT) {
        let posts = state.posts;

        let selectedPost = posts.find(x => x.id === action.id);

        if (selectedPost) {
            if (selectedPost.hadLike) {
                selectedPost.likeCount--;
            } else {
                selectedPost.likeCount++;
            }
        }

        selectedPost.hadLike = !selectedPost.hadLike;
    }
    
    return state;
}

export const addPostActionCreator = (post) => {
    return {
        type: ADD_POST, 
        post: post
    }
}

export const likeItActionCreator = (id) => {
    return {
        type: LIKE_IT,
        id: id
    }
}