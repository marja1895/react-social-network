import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'

const Profile = () => {
    return <div>
    <div>
      <img width="100%"src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SouthParkTheFracturedButWhole_enGB.jpg" alt="hero image"/>
      </div>
      <div>
        ava + desk
      </div>
  <MyPosts />
    </div>
}

export default Profile;