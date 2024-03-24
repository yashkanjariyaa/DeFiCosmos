import React from "react";
import CryptoPortfolio from "../home/tokenList";
import { useNavigate } from "react-router-dom";
import Map from "../home/map";
import SmartContractsList from "../home/scList";
import TokenHoldTimeVisualizer from "../userProfile/HoldTime";
import WalletTraitsComponent from "../userProfile/WalletTraits";
import WalletScores from "../userProfile/WalletScore";
import WalletContactComponent from "../userProfile/WalletSocial";
import "./portfolio.css";

const Portfolio = () => {
    const wallet = import.meta.env.VITE_WALLET;
    const navigate = useNavigate();
    const handleChatButton = () => {
        navigate('/chat');
    }

    return(
        <div className="portfolio-container">
            <div className="navbar">
                <Map/>
            </div>
            <div className="content">
                <h2 className="wallet-address">{wallet}</h2>
                <CryptoPortfolio/>
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
