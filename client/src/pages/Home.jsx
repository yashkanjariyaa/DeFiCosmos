import React from "react";
import CryptoPortfolio from "../components/home/portfolio";
import { useNavigate } from "react-router-dom";
import Map from "../components/home/map";
const Home = () => {
    const navigate = useNavigate();
    const handleChatButton = () => {
        navigate('/chat');
    }
    return(
        <div>
            home
            <CryptoPortfolio/>
            <Map/>
            <button onClick={handleChatButton}>Chat</button>
        </div>
    );
}

export default Home;