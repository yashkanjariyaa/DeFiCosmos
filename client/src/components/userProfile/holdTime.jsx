import React, { useState, useEffect } from 'react';
import "./holdtime.css";

const TokenHoldTimeVisualizer = () => {
  const [averageHoldTime, setAverageHoldTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchHoldTime = async () => {
      try {
        const response = await fetch('https://dashboard.withblaze.app/api/graphql-api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey // Replace 'API Key' with your actual API key
          },
          body: JSON.stringify({
            query: `
              query TokensAverageHoldTime($walletAddress: String!){
                tokensHoldTime(walletAddress: $walletAddress){
                  walletAddress
                  averageHoldTime
                }
              }
            `,
            variables: {
              walletAddress: "0xc0e95EbD15252490CaD48129F35ffb9E9919bD0E" // Replace with your wallet address
            }
          })
        });

        const data = await response.json();
        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        setAverageHoldTime(data.data.tokensHoldTime.averageHoldTime);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchHoldTime();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="average-hold-time">
      {averageHoldTime && (
        <p>Average Token Hold Time: {averageHoldTime}</p>
      )}
    </div>
  );
};

export default TokenHoldTimeVisualizer;
