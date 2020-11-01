import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return <header className={classes.header}>
    <img alt="logo" src="https://cdn.merchantmaverick.com/wp-content/uploads/2014/02/Stripe_logo.png" />
  </header>;
}

export default Header;