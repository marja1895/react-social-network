import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return   (  <div className={classes.posts}>
    My posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
<Post message="Hi, how are you" likeCount="20"/>
<Post message="Hello world" likeCount="1"/>"

  </div>)
}

export default MyPosts;