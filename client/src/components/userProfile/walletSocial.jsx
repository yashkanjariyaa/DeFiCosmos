import React, { useState, useEffect } from 'react';
import "./walletSocial.css";

const WalletContactComponent = ({ walletAddress }) => {
  const [data, setData] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dashboard.withblaze.app/api/graphql-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey
        },
        body: JSON.stringify({
          query: `
            query WalletContacts($walletAddress: String!){
              walletContacts(walletAddress: $walletAddress){
                  walletAddress
                  twitterHandle
                  email
                  telegramHandle
              }
            }
          `,
          variables: {
            "walletAddress": walletAddress
          }
        })
      });

      const responseData = await response.json();
      setData(responseData.data.walletContacts);
    };

    fetchData();
  }, [walletAddress, apiKey]);

  return (
    <div className="wallet-social-container">
      {data ? (
        <div className="bento-grid">
          <div className="remaining-info" id="item-0">
            <h3>Twitter Handle:</h3>
            <p>{data.twitterHandle}</p>
          </div>
          <div className="remaining-info" id="item-1">
            <h3>Email:</h3>
            <p>{data.email}</p>
          </div>
          <div className="remaining-info" id="item-2">
            <h3>Telegram Handle:</h3>
            <p>{data.telegramHandle ? data.telegramHandle : "None"}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WalletContactComponent;
