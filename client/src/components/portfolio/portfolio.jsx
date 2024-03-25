import React from "react";
import TokenList from "../home/tokenList";
import { useNavigate } from "react-router-dom";
import SmartContractsList from "../home/scList";
import "./portfolio.css";

const Portfolio = () => {
    const wallet = import.meta.env.VITE_WALLET;
    // const navigate = useNavigate();
    // const handleChatButton = () => {
    //     navigate('/chat');
    // }

    return(
        <div className="portfolio-container">
            <div className="content">
                <h2 className="wallet-address">{wallet}</h2>
                <TokenList/>
                <SmartContractsList walletAddress={wallet} lastNDays={90}/>
                {/* <button onClick={handleChatButton}>Chat</button> */}
            </div>
        </div>
    );
}

export default Portfolio;
