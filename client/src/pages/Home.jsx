import React from "react";
import Portfolio from "../components/portfolio/portfolio";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const wallet = import.meta.env.VITE_WALLET;
    const navigate = useNavigate();
    const handleChatButton = () => {
        navigate('/chats');
    }
    return(
        <div>
            <Portfolio/>
            <button onClick={handleChatButton}>Chat</button>
        </div>
    );
}

export default Home;