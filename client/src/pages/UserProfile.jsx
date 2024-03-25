import React, { useEffect } from 'react';
import HoldTime from '../components/userProfile/HoldTime'; // Adjust import path
import WalletScore from '../components/userProfile/WalletScore'; // Adjust import path
import WalletSocial from '../components/userProfile/WalletSocial'; // Adjust import path
import WalletTraits from '../components/userProfile/WalletTraits'; // Adjust import path

import "./userProfile.css"; // Adjust CSS import path
import Portfolio from '../components/portfolio/portfolio';



const UserProfile = () => {
  // Dummy data for username, followers, Twitter handle, and email
  const username = 'John Doe';
  const followers = 10000;
  const following = 10000;
const imageLink = "./rocket2.png";

useEffect (() =>{
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to generate a random color from an array of colors
  function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Function to create stars and asteroids with random colors
  function createStarsAndAsteroids(numElements) {
    const container = document.querySelector(".stars");
    const colors = ["#FFC0CB", "#FF69B4", "#FFD700", "#FFFF00", "#FFFFFF"]; // Shades of pink, yellow, and white

    for (let i = 0; i < numElements; i++) {
      const element = document.createElement("div");
      element.classList.add("element");

      // Randomize position and color
      element.style.left = `${getRandomNumber(0, container.offsetWidth)}px`;
      element.style.top = `${getRandomNumber(100, 200)}vh`;
      element.style.backgroundColor = getRandomColor(colors);

      // Add class for differentiating between stars and asteroids
      if (Math.random() < 0.5) {
        element.classList.add("star");
      } else {
        element.classList.add("asteroid");
      }

      container.appendChild(element);
    }
  }

  // Call the function to create stars and asteroids
  createStarsAndAsteroids(100);
})
  
  
  return (
    <div className="user-profile">
  <div className="profile-header">
    <div className="profile-info">
      <div className="profile-header-top">
        <img className="profile-image" src={imageLink} alt="profile-pic" />
        <h1 className='username'>{username}</h1>
        <div className="followers">
          <p>Followers: {followers}</p>
        </div>
        <div className="following">
          <p>Following: {following}</p>
        </div>
      </div>
      <div className="wallet-social">
        <WalletSocial />
      </div>
    </div>
  </div>
  <div className="profile-details">
    <div className="hold-time">
      <HoldTime />
    </div>
    <div className="wallet-score">
      <WalletScore />
    </div>
    <div className="wallet-traits">
      <h2>Wallet Traits</h2>
      <WalletTraits />
    </div>
    <div className='portfolio-container'>
    <Portfolio/>
    </div>
  </div>
</div>

  );
};

export default UserProfile;
