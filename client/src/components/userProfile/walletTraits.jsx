import React, { useState, useEffect } from 'react';
import "./wallettraits.css";

function WalletTraitsComponent({ walletAddress }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://dashboard.withblaze.app/api/graphql-api', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': apiKey
                    },
                    body: JSON.stringify({
                        query: `
                        query WalletTraits($walletAddress: String!){
                            walletTraits(walletAddress: $walletAddress){
                                walletAddress
                                twitterHandles
                                emails
                                telegramHandles
                                walletTags {
                                    cex
                                    historical
                                    latestActive
                                }
                                erc20Tokens {
                                    chain
                                    tokenAddress
                                    tokenName
                                    tokenSymbol
                                }
                                erc721Tokens {
                                    chain
                                    tokenAddress
                                    tokenName
                                    tokenSymbol
                                }
                                ethereumTokenPortfolioValue
                                polygonTokenPortfolioValue
                                nftPortfolioValue
                                arbitrumTokenPortfolioValue
                                bscTokenPortfolioValue
                                baseTokenPortfolioValue
                                optimismTokenPortfolioValue
                                washCategory
                                volumeCategory
                                activityCategory
                                lastTransactionDate
                            }
                        }
                        `,
                        variables: {
                            "walletAddress": String(walletAddress),
                          },
                    })
                });

                const responseData = await response.json();
                setData(responseData.data.walletTraits);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, [walletAddress, apiKey]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return null;

    return (
        <div className="wallet-details">
            <h2 style={{ marginBottom: '10px' }}>Wallet Address: {data.walletAddress}</h2>
            {data.walletTags && Object.keys(data.walletTags).length > 0 ? (
                <div className="wallet-tags">
                    <h3>Wallet Tags:</h3>
                    <ul>
                        {Object.keys(data.walletTags).map((tagType) => (
                            <li key={tagType}>
                                <strong>{tagType}:</strong> {data.walletTags[tagType].join(', ')}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No wallet tags found.</p>
            )}
            <div className="portfolio-values">
                <h3>Portfolio Values:</h3>
                <ul>
                    <li>Ethereum: {data.ethereumTokenPortfolioValue}</li>
                    <li>Polygon: {data.polygonTokenPortfolioValue}</li>
                    <li>NFT: {data.nftPortfolioValue}</li>
                    <li>Arbitrum: {data.arbitrumTokenPortfolioValue}</li>
                    <li>BSC: {data.bscTokenPortfolioValue}</li>
                    <li>Base: {data.baseTokenPortfolioValue}</li>
                    <li>Optimism: {data.optimismTokenPortfolioValue}</li>
                </ul>
            </div>
        </div>
    );
}

export default WalletTraitsComponent;
