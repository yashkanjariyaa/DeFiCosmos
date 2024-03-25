import React from "react";
import TokenList from "../home/tokenList";
import SmartContractsList from "../home/scList";
import "./portfolio.css";

const Portfolio = (walletAddress) => {
    // const wallet = import.meta.env.VITE_WALLET;
    // const navigate = useNavigate();
    // const handleChatButton = () => {
    //     navigate('/chat');
    // }
    return(
        <div className="portfolio-container">
            <div className="content">
                <h2 className="wallet-address">{walletAddress}</h2>
                <TokenList walletAddress={walletAddress}/>
                <SmartContractsList walletAddress={walletAddress} lastNDays={90}/>
                {/* <button onClick={handleChatButton}>Chat</button> */}
            </div>
        </div>
    );
}

export default Portfolio;
