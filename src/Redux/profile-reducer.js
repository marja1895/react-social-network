const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{ id: 1, likeCount: 12, message: 'Hi, how are you' },
		{ id: 2, likeCount: 1, message: 'Hello world' },
	],
	newPostText: '',
}


const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
				id: 5,
				message: state.newPostText,
				likeCount: 0,
			}

			state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
	return {
		type: ADD_POST,
	}
}


export const updateNewPostTextActionCreator = (text) => {
	return { 
	    type: UPDATE_NEW_POST_TEXT, 
		newText: text 
	}
}
export default profileReducer;