import React, { useState, useEffect } from "react";

function Leaderboard() {
  const [topWalletScoreUsers, setTopWalletScoreUsers] = useState([]);
  const [topPortfolioValuesUsers, setTopPortfolioValuesUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopPerformers = () => {
      // Fetch top performers based on wallet score
      fetch("/server/api/leaderboardWalletScore", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch wallet score leaderboard");
          }
          return response.json();
        })
        .then((walletScoreData) => {
          console.log(walletScoreData);
          setTopWalletScoreUsers(walletScoreData);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const fetchTopPortfolios = () => {
      fetch("/server/api/leaderboardPortfolioValues", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch portfolio values leaderboard");
          }
          return response.json();
        })
        .then((portfolioValuesData) => {
          console.log(portfolioValuesData);
          setTopPortfolioValuesUsers(portfolioValuesData);
        })
        .catch((error) => {
          setError(error.message);
        });
    }

    fetchTopPerformers();
    fetchTopPortfolios();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Top 5 Wallet Score Performers</h2>
      <ul>
        {topWalletScoreUsers.map((user, index) => (
          <li key={index}>
            {user.userID} - Wallet Score: {user.walletScore}
          </li>
        ))}
      </ul>

      <h2>Top 5 Portfolio Values Performers</h2>
      <ul>
        {topPortfolioValuesUsers.map((user, index) => (
          <li key={index}>
            {user.name} - Portfolio Value: {user.portfolioValue}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
