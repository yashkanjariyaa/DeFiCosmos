import React from "react";
import CryptoPortfolio from "../home/tokenList";
import { useNavigate } from "react-router-dom";
import SmartContractsList from "../home/scList";
import TokenHoldTimeVisualizer from "../home/holdTime";
import WalletTraitsComponent from "../home/walletTraits";
import WalletScores from "../home/walletScore";
import WalletContactComponent from "../home/walletSocial";
const Portfolio = () => {
    const wallet = import.meta.env.VITE_WALLET;
    const navigate = useNavigate();
    const handleChatButton = () => {
        navigate('/chat');
    }
    return(
        <div>
            home
            <CryptoPortfolio/>
            <SmartContractsList walletAddress={wallet} lastNDays={90}/>
            <TokenHoldTimeVisualizer/>
            <WalletTraitsComponent walletAddress={wallet}/>
            <WalletScores/>
            <WalletContactComponent/>
            <button onClick={handleChatButton}>Chat</button>
        </div>
    );
}

export default Portfolio;