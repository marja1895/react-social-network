import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
	return (
		<div>
			<div>
				<img
					width='100%'
					src='https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SouthParkTheFracturedButWhole_enGB.jpg'
					alt='hero image'
				/>
			</div>
			<div className={classes.descriptionBlock}>ava + desk</div>
		</div>
	)
}

export default ProfileInfo
