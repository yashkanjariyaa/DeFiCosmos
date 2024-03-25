import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

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
    // <div>
    //   <h2>Wallet Scores</h2>
    //   <p>Web3 Reputation Score: {scores.web3ReputationScore}</p>
    //   <p>Authenticity Score: {scores.authenticityScore}</p>
    // </div>


    <div>
    {/* <h2>Wallet Scores</h2>
    <p>Web3 Reputation Score: {scores.web3ReputationScore}</p>
    <p>Authenticity Score: {scores.authenticityScore}</p> */}
    
    <Plot
      data={[
        {
          x: ['Web3 Reputation', 'Authenticity'],
          y: [scores.web3ReputationScore, scores.authenticityScore],
          type: 'bar',
          marker: { color: '#fafa6e' }, 
          text: [scores.web3ReputationScore, scores.authenticityScore],// Bar color
          hoverinfo: 'none', // Hide hover info
          textposition: 'auto',
        },
        {
          x: ['Web3 Reputation', 'Authenticity'],
          y: [100, 100],
          type: 'scatter',
          mode: 'lines',
          line: { color: 'red', dash: 'dash' }, // Horizontal line style
          name: 'Max Score',
          showlegend: false, // Hide legend for the horizontal line
        },
      ]}
      layout={{
        title: `<span style="color: white;">Wallet Scores</span>`,
        xaxis: { title:  `<span style="color: white;">Score Type</span>` },
        yaxis: { title:  `<span style="color: white;">Score</span>`, range: [0, 100 + 10] }, // Y-axis range
        barmode: 'group', // Display bars side by side
        plot_bgcolor: 'rgba(137, 113, 208, 0.1)',
          paper_bgcolor: 'rgba(137, 113, 208, 0.1)',
      }}
      style={{ width: '400px', height: '300px' }}
      config={{ displayModeBar: false }}
    />
  </div>

  );
}

export default WalletScores;
