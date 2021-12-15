import Axios from "axios";
import { useEffect, useState } from "react";
import Crypto from "../Components/Crypto";
import "./Home.css";


export default function Home(){
    //Declaring empty array of coins to be fetched later
    const [coins, setCoins] = useState([]);
    //Declaring search variable to use for searching coins by name
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        refreshPage();
    }, []);

    const filtering = coins.filter( (coin) => 
        coin.name.toLowerCase().includes(search.toLowerCase())
        
    );



    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const refreshPage = () => {
        setIsLoading(true);
        Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response) => {
            console.log(response.data);
            setIsLoading(false);
            setCoins(response.data);
        });
    }

    return(
        <div className="home">
            <div className="header-container">
                <h1>Crypto<span style={{"color":"#C83333"}}>View</span></h1>
                <div className="search-container">
                    <input
                        className="search"
                        placeholder="Search"
                        type="text"
                        onChange={handleSearch}
                    />
                    <i className="fas fa-search" onClick={refreshPage}></i>
                </div>
            </div>
           <div className="body-container">
                <p>haw jek</p>
                {isLoading && <h1 className="msgLoading"> Fetching Crypto data from the API...</h1>}
                
                {filtering.map( (coins) => {
                    
                    return (
                        <Crypto 
                            id={coins.id}
                            icon={coins.image}
                            coinName={coins.name}
                            coinSymbol={coins.symbol}
                            price={coins.current_price}
                            marketCap={coins.market_cap}
                            priceChange={coins.price_change_percentage_24h}
                        />
                    )  
                })}
           </div>

           <p className="foot">made with &#10084;&#65039; by weldomi</p>
        </div>
    )


}