import React from 'react';
import HoldTime from '../components/userProfile/holdTime'; // Adjust import path
import WalletScore from '../components/userProfile/walletScore'; // Adjust import path
import WalletSocial from '../components/userProfile/walletSocial'; // Adjust import path
import WalletTraits from '../components/userProfile/walletTraits'; // Adjust import path

import "./userProfile.css"; // Adjust CSS import path
import Portfolio from '../components/portfolio/portfolio';



const UserProfile = () => {
  // Dummy data for username, followers, Twitter handle, and email
  const username = 'John Doe';
  const followers = 10000;
  const following = 10000;
const imageLink = "./rocket2.png";
  
  
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
