import "./secondpage.css";

import React from "react";
import image from "../../assets/icon.png";
import { useLocation } from "react-router-dom";
import TradingViewWidget from "./chart";

export default function SecondPage() {
  // useLocation which gets the location of previous page where we passed state on Link
  const LOCATION = useLocation();

  // Retrieves the data from the other page and displays it
  const STOCK_DATA_SHOW = LOCATION.state?.stockData;
  const INFO_DATA = LOCATION.state?.infoData;

  return (
    <div className="main-container">
      <div className="container">
        <img
          src={image}
          alt="icon"
          id="icon"
          onClick={() => (window.location.href = "/")}
        />
        <div className="card1">
          <h1 id="symbol">
            {STOCK_DATA_SHOW ? STOCK_DATA_SHOW.symbol : "INVALID"}
          </h1>
          <h1>{STOCK_DATA_SHOW.symbol} Data metrics</h1>
          <p>Open: ${STOCK_DATA_SHOW.open}</p>
          <p>High: ${STOCK_DATA_SHOW.high}</p>
          <p>Low: ${STOCK_DATA_SHOW.low}</p>
          <p>Close: ${STOCK_DATA_SHOW.previousClose}</p>
          <p>PE Ratio: {INFO_DATA.PERatio}</p>
          <p>EPS: {INFO_DATA.EPS}</p>
          <p>Beta Ratio: {INFO_DATA.beta}</p>
        </div>
        <div className="card3">
          <h2 id="title">Company Description:</h2>
          <p id="desc">
            <span>{INFO_DATA.companyDescription}</span>
          </p>
        </div>
        <div className="chart">
          <TradingViewWidget stockData={STOCK_DATA_SHOW} />
        </div>
      </div>
    </div>
  );
}
