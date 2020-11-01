import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return <div className={classes.content}>
    <div>
      <img width="100%"src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SouthParkTheFracturedButWhole_enGB.jpg" alt="hero image"/>
      </div>
      <div>
        ava + desk
      </div>
      <div className={classes.posts}>
        My posts
        <div className={classes.post}>
          New post
        </div>
        <div className={classes.post}>
          post1
        </div>
        <div className={classes.post}>
          New post
        </div>
      </div>
    </div>
}

export default Profile;