import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return     (<div className={classes.post}>
    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg"></img>
      {props.messagePosts}
      <div>
          <span>
              Like
          </span>{props.likeCount}
      </div>
    </div>)
}

export default Post;