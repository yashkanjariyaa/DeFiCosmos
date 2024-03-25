import React from "react";
import "./network.css";

const PolygonSystem = () => {
    const navigate = useNavigate();
    const navigateToChats = () => {
        navigate("/chats"); // Navigate to /chats route
    };
    return(
        <div className="network-body">
            <div className="polygon-sun"></div>
            <button className="navigate-button" onClick={navigateToChats}>Go to text channel</button>
        </div>
    );
}

export default PolygonSystem;