import React from 'react';
import "../Components/Crypto.css";
import { useNavigate } from "react-router-dom";

export default function Coin(props){
    let navigate = useNavigate();
// This is coins view that will contain main details of each coin such as name, price, etc..
    return (
        <div className = "coin-container">
            <div className="coin-rows">
                <div className="coin-data">
                    <div className="coin">
                        <img src = {props.icon} alt="icon" className="icon"/>
                        <h1 className="coin-name">{props.coinName}</h1>
                        <p className="symbol">{props.coinSymbol}</p>
                        <p className="price">EUR {props.price.toFixed(2)}</p>
                        {props.priceChange > 0 ?(
                            <p className="priceChange green">{props.priceChange.toFixed(2)}%</p>
                        ):(
                            <p className="priceChange red">{props.priceChange.toFixed(2)}%</p>
                        )}
                        <p className="volume">EUR {props.marketCap.toLocaleString()} </p>
                        <button
                        onClick={ () => {
                            navigate(`/CoinPage/${props.id}`)
                        }}
                        >View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}