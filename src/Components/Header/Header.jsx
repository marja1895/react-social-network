import React from 'react'
import classes from './Header.module.css'

const Header = () => {
	return (
		<header className={classes.header}>
			<img
				alt='logo'
				src='https://picua.org/images/2020/11/13/bf6edb358386ffdd8c63514d1e3ffa50.jpg'
			/>
		</header>
	)
}

export default Header
