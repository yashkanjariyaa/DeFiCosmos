import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [topWalletScoreUsers, setTopWalletScoreUsers] = useState([]);
  const [topPortfolioValuesUsers, setTopPortfolioValuesUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopPerformers = async () => {
      try {
        // Fetch top performers based on wallet score
        const walletScoreResponse = await fetch('/server/api/leaderboardWalletScore');
        if (!walletScoreResponse.ok) {
          throw new Error('Failed to fetch wallet score leaderboard');
        }
        const walletScoreData = await walletScoreResponse.json();
        setTopWalletScoreUsers(walletScoreData);

        // Fetch top performers based on portfolio values
        const portfolioValuesResponse = await fetch('/server/api/leaderboardPortfolioValues');
        if (!portfolioValuesResponse.ok) {
          throw new Error('Failed to fetch portfolio values leaderboard');
        }
        const portfolioValuesData = await portfolioValuesResponse.json();
        setTopPortfolioValuesUsers(portfolioValuesData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTopPerformers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Top 5 Wallet Score Performers</h2>
      <ul>
        {topWalletScoreUsers.map((user, index) => (
          <li key={index}>{user.name} - Wallet Score: {user.walletScore}</li>
        ))}
      </ul>

      <h2>Top 5 Portfolio Values Performers</h2>
      <ul>
        {topPortfolioValuesUsers.map((user, index) => (
          <li key={index}>{user.name} - Portfolio Value: {user.portfolioValue}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
