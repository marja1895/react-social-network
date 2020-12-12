import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.navitem}>
				<NavLink to='/profile' activeClassName={classes.activeLink}>
					Profile
				</NavLink>
			</div>
			<div className={classes.navitem}>
				<NavLink to='/dialogs' activeClassName={classes.activeLink}>
					Messages
				</NavLink>
			</div>
			<div className={classes.navitem}>
				<NavLink to='/users' activeClassName={classes.activeLink}>
					Users
			</NavLink>
			</div>
			<div className={classes.navitem}>
				<NavLink to='/news' activeClassName={classes.activeLink}>
					News
				</NavLink>
			</div>
			<div className={classes.navitem}>
				<NavLink to='/music' activeClassName={classes.activeLink}>
					Music
				</NavLink>
			</div>
			<div className={classes.navitem}>
				<NavLink to='/settings' activeClassName={classes.activeLink}>
					Settings
				</NavLink>
				<Sidebar />
			</div>
		</nav>
	)
}

export default Navbar
