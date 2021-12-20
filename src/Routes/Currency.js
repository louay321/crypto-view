import React from 'react';
import Axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Currency.css";

export default function Currency(){
    let { id } = useParams();
    const [coin, setCoin] = useState(null);

    useEffect(() => {
        console.log(id);
        Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(
          (response) => {
            console.log(response.data);
            setCoin(response.data);
          }
        );
      }, []);


    if(coin) {
        return (
            <div className="coinPage-Container">
                <div className="infoPage">
                    <h1>{coin.name}</h1>
                    <img src={coin.image.large} alt="Icon" className="coinPage-Icon" />
          <div className="coinPage-Data">
            <div className="coinPage-Row">
              <h3 className="coinPage-RowHeader">Symbol:</h3>
              <h3 className="coinPage-RowData">{coin.symbol}</h3>
            </div>
            <div className="coinPage-Row">
              <h3 className="coinPage-RowHeader">Current Price:</h3>
              <h3 className="coinPage-RowData">
                $ {coin.market_data.current_price.eur.toLocaleString()}
              </h3>
            </div>
            <div className="coinPage-Row">
              <h3 className="coinPage-RowHeader">Market Cap:</h3>
              <h3 className="coinPage-RowData">
                $ {coin.market_data.market_cap.eur.toLocaleString()}
              </h3>
            </div>
            <div className="coinPage-Row">
              <h3 className="coinPage-RowHeader">Total Volume:</h3>
              <h3 className="coinPage-RowData">
                $ {coin.market_data.total_volume.eur.toLocaleString()}
              </h3>
            </div>
            <div className="coinPage-Row">
              <h3 className="coinPage-RowHeader">24hr High:</h3>
              <h3 className="coinPage-RowData green">
                $ {coin.market_data.high_24h.eur.toLocaleString()}
              </h3>
            </div>
            <div className="coinPage-Row">
              <h3 className="coinPage-RowHeader">24hr Low:</h3>
              <h3 className="coinPage-RowData red">
                $ {coin.market_data.low_24h.eur.toLocaleString()}
              </h3>
            </div>
          </div>
          <Link to="/">
            <div className="coinPage-RouteButton">Go back</div>
          </Link>
                </div>
            </div>
        )
    }
    else {
        return null; // if API data not fetched, return null
      }
}