import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const CryptoMarketCap = () => {
  const [chain, setChain] = useState("ETHEREUM");
  const [marketCapData, setMarketCapData] = useState([]);

  useEffect(() => {
    fetchMarketCapData();
  }, [chain]);

  const fetchMarketCapData = async () => {
    try {
      const response = await fetch('https://dashboard.withblaze.app/api/chain-insights/market_cap', {
        method: 'POST',
        headers: {
          'Authorization': 'API Key',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "chain": chain,
          "start_date": "2023-01-01",
          "end_date": "2023-01-31"
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setMarketCapData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChangeChain = (newChain) => {
    setChain(newChain);
  };

  // Extracting date and market cap values for Plotly
  const dates = marketCapData.map(entry => entry.date);
  const marketCaps = marketCapData.map(entry => entry.market_cap);

  return (
    <div>
      <h2>Crypto Market Capitalization</h2>
      <div>
        <button onClick={() => handleChangeChain("ETHEREUM")}>Ethereum</button>
        <button onClick={() => handleChangeChain("ARBITRUM")}>Arbitrum</button>
        <button onClick={() => handleChangeChain("BSC")}>BSC</button>
        <button onClick={() => handleChangeChain("POLYGON")}>Polygon</button>
        <button onClick={() => handleChangeChain("BASE")}>Base</button>
        <button onClick={() => handleChangeChain("OPTIMISM")}>Optimism</button>
      </div>
      <Plot
        data={[
          {
            x: dates,
            y: marketCaps,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'blue' },
          }
        ]}
        layout={{
          width: 800,
          height: 400,
          title: `Market Cap Over Time (${chain})`,
          xaxis: { title: 'Date' },
          yaxis: { title: 'Market Cap' },
        }}
      />
    </div>
  );
};

export default CryptoMarketCap;
