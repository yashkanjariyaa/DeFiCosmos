import React from "react";
import "./network.css";
import { useNavigate } from "react-router-dom";
const OptimismSystem = () => {
    const navigate = useNavigate();
    const navigateToChats = () => {
        navigate("/chats"); // Navigate to /chats route
    };
    return(
        <div className="network-body">
            <div className="optimism-sun"></div>
            <button className="navigate-button" onClick={navigateToChats}>Go to text channel</button>
        </div>
    );
}

export default OptimismSystem;