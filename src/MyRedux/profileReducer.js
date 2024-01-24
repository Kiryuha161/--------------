const ADD_POST = 'ADD-POST';
const LIKE_IT = 'LIKE-IT'

export const profileReducer = (state, action) => {
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