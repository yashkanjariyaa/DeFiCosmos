import React from 'react';
import HoldTime from '../components/userProfile/holdTime'; // Adjust import path
import WalletScore from '../components/userProfile/walletScore'; // Adjust import path
import WalletSocial from '../components/userProfile/walletSocial'; // Adjust import path
import WalletTraits from '../components/userProfile/walletTraits'; // Adjust import path

import "./userProfile.css"; // Adjust CSS import path

const UserProfile = () => {
  // Dummy data for demonstration
  const userData = {
    profileImage: "https://example.com/profile-image.jpg",
    username: "JohnDoe",
    email: "johndoe@example.com",
    twitter: "@johndoe"
  };

  // Dummy scores data
  const scores = {
    web3ReputationScore: 85,
    authenticityScore: 90
  };

  // Dummy hold time data
  const holdTimeData = {
    averageHoldTime: 72 // in hours
  };

  // Dummy social data
  const socialData = {
    walletAddress: "0xc894a1fdc25598eb68720bcbbe75710f2164b0ac",
    twitterHandle: "@johndoe",
    email: "johndoe@example.com",
    telegramHandle: "@johndoe"
  };

  // Dummy traits data
  const traitsData = {
    walletAddress: "0xc894a1fdc25598eb68720bcbbe75710f2164b0ac",
    walletTags: {
      cex: ["Coinbase", "Binance"],
      historical: ["Early adopter"],
      latestActive: ["NFTs"]
    },
    ethereumTokenPortfolioValue: 1000,
    polygonTokenPortfolioValue: 500,
    nftPortfolioValue: 200,
    arbitrumTokenPortfolioValue: 300,
    bscTokenPortfolioValue: 400,
    baseTokenPortfolioValue: 600,
    optimismTokenPortfolioValue: 700
  };

  return (
    <div className="instagram-profile">
      <div className="user-info">
        <img src={userData.profileImage} alt="Profile" className="profile-image" />
        <div className="username-section">
          <h2 className="username">{userData.username}</h2>
          <p className="email">Email: {userData.email}</p>
          <p className="twitter">Twitter: {userData.twitter}</p>
        </div>
      </div>
      <div className="user-details">
        <WalletScore scores={scores} />
        <WalletSocial data={socialData} />
        <HoldTime averageHoldTime={holdTimeData.averageHoldTime} />
        <WalletTraits data={traitsData} />
      </div>
    </div>
  );
};

export default UserProfile;