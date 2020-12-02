import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, likeCount: 12, message: 'Hi, how are you' },
				{ id: 2, likeCount: 1, message: 'Hello world' },
			],
			newPostText: '',
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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	}
}





export default store
window.store = store
