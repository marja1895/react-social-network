import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
    return <nav className={classes.nav}>
    <div className={classes.navitem}>
      <a href="#">Profile</a>
    </div>
    <div className={classes.navitem}>
    <a href="#">Messages</a>
    </div>
    <div className={classes.navitem}>
    <a href="#">News</a>
    </div>
    <div className={classes.navitem}>
    <a href="#">Music</a>
    </div>
    <div className={classes.navitem}>
    <a href="#">Settings</a>
    </div>
  </nav>
}

export default Navbar;