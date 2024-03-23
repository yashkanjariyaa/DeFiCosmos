import React from "react";
import CryptoPortfolio from "../home/tokenList";
import { useNavigate } from "react-router-dom";
import Map from "../home/map";
import SmartContractsList from "../home/scList";
import TokenHoldTimeVisualizer from "../userProfile/holdTime";
import WalletTraitsComponent from "../userProfile/walletTraits";
import WalletScores from "../userProfile/walletScore";
import WalletContactComponent from "../userProfile/walletSocial";
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
            <Map/>
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