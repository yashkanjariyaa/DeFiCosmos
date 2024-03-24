import React from "react";
import tokenList from "../home/tokenList";
import { useNavigate } from "react-router-dom";
import SmartContractsList from "../home/scList";
import TokenHoldTimeVisualizer from "../userProfile/holdTime";
import WalletTraitsComponent from "../userProfile/walletTraits";
import WalletScores from "../userProfile/walletScore";
import WalletContactComponent from "../userProfile/walletSocial";
import "./portfolio.css";

const Portfolio = () => {
    const wallet = import.meta.env.VITE_WALLET;
    const navigate = useNavigate();
    const handleChatButton = () => {
        navigate('/chat');
    }

    return(
        <div className="portfolio-container">
            <div className="content">
                <h2 className="wallet-address">{wallet}</h2>
                <tokenList/>
                <SmartContractsList walletAddress={wallet} lastNDays={90}/>
                <TokenHoldTimeVisualizer/>
                <WalletTraitsComponent walletAddress={wallet}/>
                <WalletScores/>
                <WalletContactComponent/>
                <button onClick={handleChatButton}>Chat</button>
            </div>
        </div>
    );
}

export default Portfolio;
