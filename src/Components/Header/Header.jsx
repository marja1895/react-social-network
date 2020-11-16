import React from 'react'
import classes from './Header.module.css'

const Header = () => {
	return (
		<header className={classes.header}>
			<img
				alt='logo'
				src='https://picua.org/images/2020/11/16/f8e067f7f13a0d95b2c7b49c478889c8.png'
			/>
		</header>
	)
}

export default Header
