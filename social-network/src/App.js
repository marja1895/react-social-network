import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className='header'>
        <img alt="logo" src="https://cdn.merchantmaverick.com/wp-content/uploads/2014/02/Stripe_logo.png" />
      </header>
      <nav className='nav'>
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
        <a href="#">Messages</a>
        </div>
        <div>
        <a href="#">News</a>
        </div>
        <div>
        <a href="#">Music</a>
        </div>
        <div>
        <a href="#">Settings</a>
        </div>
      </nav>
      <div className='content'>
      <div>
        <img width="100%"src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SouthParkTheFracturedButWhole_enGB.jpg" alt="hero image"/>
        </div>
        <div>
          ava + desk
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            post1
          </div>
          <div>
            New post
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
