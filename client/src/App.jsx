import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Auth, Chat, WalletPage, Home, Data } from "./pages";
import rocketImage from "./rocket.png";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Function to generate a random number between min and max (inclusive)
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
        element.style.top = `${getRandomNumber(0, container.offsetHeight)}px`;
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
    createStarsAndAsteroids(50); // You can adjust the number of elements as needed
  }, []);
  return (
    <div className="app-container stars">
      {/* Add stars and asteroids dynamically in the App component */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/data" element={<Data/>} />
          {/* If the user enters an invalid path in the URL it automatically redirects them to the homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {/* Rocket image */}
      <div className="rocket-container">
        <img src={rocketImage} alt="Rocket" className="rocket" />
      </div>
    </div>
  );
};

export default App;
