import React, { useState, useEffect } from "react";
import HoldTime from "../components/userProfile/HoldTime";
import WalletScore from "../components/userProfile/WalletScore";
import WalletSocial from "../components/userProfile/WalletSocial";
import WalletTraits from "../components/userProfile/WalletTraits";
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
  
    
    createStarsAndAsteroids(100);
  }, [])
  console.log(userAddress);
  console.log(typeof(userAddress));
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
              <h1 className="username">{userData.name}</h1>
              <div className="followers">
                <p>Followers: 23</p>
              </div>
              <div className="following">
                <p>Following: 45</p>
              </div>
            </div>
            <div className="wallet-social">
              <WalletSocial  walletAddress={userAddress} />
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
