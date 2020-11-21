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
		},

		sidebar: {},
	},
	_callSubscriber() {
		console.log('state was changed')
	},
	getState() {
		return this._state
	},

	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likeCount: 0,
		}

		this._state.profilePage.posts.push(newPost)
		this._state.profilePage.newPostText = ''
		this._callSubscriber(this._state)
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText
		this._callSubscriber(this._state)
	},
	subscribe(observer) {
		this._callSubscriber = observer // pattern observer
	},
}

export default store
window.store = store
