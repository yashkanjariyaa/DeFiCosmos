import React from "react";
import "./network.css";
import LeaderboardCard from "../../components/network/portfolioLeaderboard";
const BSCSystem = () => {
    return(
        <div className="network-body">
            <div className="bsc-sun"></div>
            <LeaderboardCard/>
        </div>
    );
}

export default BSCSystem;