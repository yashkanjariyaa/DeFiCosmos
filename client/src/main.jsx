import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ChatProvider from "./context/ChatProvider";
import "./main.css"; // Import CSS file
import rocketImage from "./rocket.png"; // Import rocket image

const Main = () => {
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
      const container = document.querySelector('.stars');
      const colors = ['#FFC0CB', '#FF69B4', '#FFD700', '#FFFF00', '#FFFFFF']; // Shades of pink, yellow, and white

      for (let i = 0; i < numElements; i++) {
        const element = document.createElement('div');
        element.classList.add('element');

        // Randomize position and color
        element.style.left = `${getRandomNumber(0, container.offsetWidth)}px`;
        element.style.top = `${getRandomNumber(0, container.offsetHeight)}px`;
        element.style.backgroundColor = getRandomColor(colors);

        // Add class for differentiating between stars and asteroids
        if (Math.random() < 0.5) {
          element.classList.add('star');
        } else {
          element.classList.add('asteroid');
        }

        container.appendChild(element);
      }
    }

    // Call the function to create stars and asteroids
    createStarsAndAsteroids(50); // You can adjust the number of elements as needed
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <ChatProvider>
          <ChakraProvider>
            <div className="app-container stars">
              {/* Add stars and asteroids dynamically in the App component */}
              <App />
              {/* Rocket image */}
              <div className="rocket-container">
                <img src={rocketImage} alt="Rocket" className="rocket" />
              </div>
            </div>
          </ChakraProvider>
        </ChatProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
