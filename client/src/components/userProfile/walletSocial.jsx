import React, { useState, useEffect } from 'react';

const WalletContactComponent = () => {
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
            "walletAddress": "0xc894a1fdc25598eb68720bcbbe75710f2164b0ac"
          }
        })
      });

      const responseData = await response.json();
      setData(responseData.data.walletContacts);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          {data.walletAddress && <p>Wallet Address: {data.walletAddress}</p>}
          {data.twitterHandle && <p>Twitter Handle: {data.twitterHandle}</p>}
          {data.email && <p>Email: {data.email}</p>}
          {data.telegramHandle[0] && <p>Telegram Handle: {data.telegramHandle}</p>}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WalletContactComponent;
