import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer'
import classes from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
	let postsElements = props.posts.map((p) => {
		return <Post message={p.message} likeCount={p.likeCount} />
	})

	let newPostElement = React.createRef()

	let addPost = () => {
		props.addPost();
	
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);

	}

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea
						onChange={onPostChange}
						ref={newPostElement}
						value={props.newPostText}
						placeholder='write your post here'
					/>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>{postsElements}</div>
		</div>
	)
}

export default MyPosts
