import React from 'react';
import { useNavigate } from 'react-router-dom';

const Map = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div>
      <h1>Navigation Component</h1>
      <button onClick={() => handleNavigation('/polygon')}>Polygon</button>
      <button onClick={() => handleNavigation('/ethereum')}>Ethereum</button>
      <button onClick={() => handleNavigation('/bsc')}>BSC</button>
      <button onClick={() => handleNavigation('/arbitrum')}>Arbitrum</button>
      <button onClick={() => handleNavigation('/base')}>Base</button>
      <button onClick={() => handleNavigation('/optimism')}>Optimism</button>
    </div>
  );
};

export default Map;
