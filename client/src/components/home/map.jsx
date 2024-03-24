import React from "react";
import { useNavigate } from "react-router-dom";
import "./map.css";
import Polygon from "../space/polygon";
import Arbitrum from "../space/arbitrum";
import Ethereum from "../space/ethereum";
import Base from "../space/base";
import Optimism from "../space/optimism";
import BSC from "../space/bsc";
const Map = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="navigation-component">
      <div className="heading">DeFiCosmos Map</div>
      <div className="sub-container">
        <div
          id="polygon-button"
          className="nav-button"
          onClick={() => handleNavigation("/polygon")}
        >
          <Polygon/>
        </div>
        <div
          id="ethereum-button"
          className="nav-button"
          onClick={() => handleNavigation("/ethereum")}
        >
          <Ethereum/>
        </div>
        <div
          id="bsc-button"
          className="nav-button"
          onClick={() => handleNavigation("/bsc")}
        >
          <BSC/>
        </div>
        <div
          id="arbitrum-button"
          className="nav-button"
          onClick={() => handleNavigation("/arbitrum")}
        >
          <Arbitrum/>
        </div>
        <div
          id="base-button"
          className="nav-button"
          onClick={() => handleNavigation("/base")}
        >
          <Base/>
        </div>
        <div
          id="optimism-button"
          className="nav-button"
          onClick={() => handleNavigation("/optimism")}
        >
          <Optimism/>
        </div>
      </div>
    </div>
  );
};

export default Map;
