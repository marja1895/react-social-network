import { rerenderEntireTree } from '../render'

let state = {
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
}

window.state = state

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likeCount: 0,
	}

	state.profilePage.posts.push(newPost)
	state.profilePage.newPostText = ''
	rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText
	rerenderEntireTree(state)
}

export default state
