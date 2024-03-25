import React, { useState, useEffect } from "react";
import HoldTime from "../components/userProfile/holdTime";
import WalletScore from "../components/userProfile/walletScore";
import WalletSocial from "../components/userProfile/walletSocial";
import WalletTraits from "../components/userProfile/walletTraits";
import { useParams } from "react-router-dom";
import "./userProfile.css";
import Portfolio from "../components/portfolio/portfolio";

const UserProfile = () => {
  const [userData, setUserData] = useState();
  const [userAddress, setUserAddress] = useState();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`/server/api/getUser/${id}`)
      .then((response) => {
        console.log(response.json());
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("User Info and Address:", data.userInfoAndAddressObject);
        console.log("User Info:", data.userInfoObject);
        setUserData(data.userInfoObject);
        setUserAddress(data.userInfoAndAddressObject.address);
        // Ensure data.address is a string before setting userAddress
        // if (typeof data.address === "string") {
        //   setUserAddress(data.address);
        // } else {
        //   setUserAddress(""); // Set default value if address is not a string
        // }
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, [id]);

  return (
    <div className="user-profile">
      {userData ? (
        <div className="profile-header">
          <div className="profile-info">
            <div className="profile-header-top">
              <img
                className="profile-image"
                src={userData.imageLink}
                alt="profile-pic"
              />
              <h1 className="username">{userData.username}</h1>
              <div className="followers">
                <p>Followers: {userData.followers}</p>
              </div>
              <div className="following">
                <p>Following: {userData.following}</p>
              </div>
            </div>
            <div className="wallet-social">
              <WalletSocial walletAddress={userAddress} />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <div className="profile-details">
        <div className="hold-time">
          <HoldTime walletAddress={userAddress} />
        </div>
        <div className="wallet-score">
          <WalletScore walletAddress={userAddress} />
        </div>
        <div className="wallet-traits">
          <h2>Wallet Traits</h2>
          <WalletTraits walletAddress={userAddress} />
        </div>
        <div className="portfolio-container">
          <Portfolio walletAddress={userAddress} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
