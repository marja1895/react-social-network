import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
	return (
		<div>
			<div>
				<img
					width='100%'
					src='https://picua.org/images/2020/11/13/592cb497b6136ff03214648aad30f4f5.jpg'
					alt='hero image'
				/>
			</div>
			<div className={classes.descriptionBlock}>ava + desk</div>
		</div>
	)
}

export default ProfileInfo
