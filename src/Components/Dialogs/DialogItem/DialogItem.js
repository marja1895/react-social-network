import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.css'

const DialogItem = (props) => {
	
	let path = '/dialogs/' + props.id
	return (
<div>
		
		<div className={classes.dialog + ' ' + classes.active}>
		<img src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg' /> 
			<NavLink to={path}>{props.name}</NavLink>
		</div>
		<div>
									</div>
		</div>
	)
}

export default DialogItem
