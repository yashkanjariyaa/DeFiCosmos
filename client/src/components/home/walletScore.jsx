import React, { useState, useEffect } from 'react';

function WalletScores() {
  const [scores, setScores] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch('https://dashboard.withblaze.app/api/graphql-api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey, // Replace 'API Key' with your actual API key
          },
          body: JSON.stringify({
            query: `
              query WalletScores($walletAddress: String!) {
                walletScores(walletAddress: $walletAddress) {
                  web3ReputationScore
                  authenticityScore
                }
              }
            `,
            variables: {
              walletAddress: "0x690B9A9E9aa1C9dB991C7721a92d351Db4FaC990",
            },
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch');
        }

        const data = await response.json();
        setScores(data.data.walletScores);
      } catch (error) {
        setError('Failed to fetch data');
      }
    };

    fetchScores();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!scores) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Wallet Scores</h2>
      <p>Web3 Reputation Score: {scores.web3ReputationScore}</p>
      <p>Authenticity Score: {scores.authenticityScore}</p>
    </div>
  );
}

export default WalletScores;
