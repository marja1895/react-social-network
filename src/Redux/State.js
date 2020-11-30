const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, likeCount: 12, message: 'Hi, how are you' },
				{ id: 2, likeCount: 1, message: 'Hello world' },
			],
			newPostText: 'write your post here',
		},

		dialogsPage: {
			messages: [
				{ id: 1, message: 'Hello' },
				{ id: 2, message: 'How are you?' },
				{ id: 3, message: 'Hihi' },
			],
			dialogs: [
				{ id: 1, name: 'Dimych' },
				{ id: 2, name: 'Ann' },
				{ id: 3, name: 'Sofy' },
			],
			newMessageBody: ''
		},

		sidebar: {},
	},
	_callSubscriber() {
		console.log('state was changed')
	},
	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer // pattern observer
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likeCount: 0,
			}

			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = ''
			this._callSubscriber(this._state)
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText
			this._callSubscriber(this._state)
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messages.push(	{ id: 6, message: body },);
			this._callSubscriber(this._state);
		}
	},
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

export const sendMessageCreator = () => {
	return {
		type: SEND_MESSAGE,
	}
}


export const updateNewMessageBodyCreator = (body) => {
	return { 
	    type: UPDATE_NEW_MESSAGE_BODY, 
		body: body
	}
}

export default store
window.store = store
