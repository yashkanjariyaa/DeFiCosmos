import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import detectEthereumProvider from "@metamask/detect-provider";
let injectedProvider = false;
import './wallet.css';

if (typeof window.ethereum !== "undefined") {
  injectedProvider = true;
  console.log(window.ethereum);
}

const isMetaMask = injectedProvider ? window.ethereum.isMetaMask : false;

const Wallet = () => {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const initialState = { accounts: [] };
  const [wallet, setWallet] = useState(initialState);
  const navigate = useNavigate();
  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      console.log(provider);
      // transform provider to true or false
      setHasProvider(Boolean(provider));
    };

    getProvider();
  }, []);

  const updateWallet = async (accounts: any) => {
    setWallet({ accounts });
    localStorage.setItem('walletAddress', accounts[0]);
    navigate('/home');
  };
  const handleConnect = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    updateWallet(accounts);
  };
  return (
    <div className="wallet" style={{ textAlign: "center" }}>
      <h1 style={{ margin:"50px", fontSize:"50px", fontFamily: "Orbitron"}}>DeFi Cosmos</h1>
      <h2>Injected Provider {injectedProvider ? "DOES" : "DOES NOT"} Exist</h2>
      <div style={{ margin: "20px 0" }}>
        {hasProvider && (
          <button
            style={{
              backgroundColor: "#FF69B4",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
            onClick={handleConnect}
          >
            Connect MetaMask Wallet
          </button>
        )}
        {wallet.accounts.length > 0 && (
          <button
            style={{
              backgroundColor: "#FF69B4",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            Wallet Accounts: {wallet.accounts[0]}
          </button>
        )}
      </div>
    </div>
  );
  
};

export default Wallet;
