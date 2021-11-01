import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router'
import axios from 'axios';

const Coin = () => {
    const [coin, setCoin] = useState({
        name:'',
        symbol:'',
        price_btc:'',
        price_usd:'',
        volume24:0

    })
    let {id} = useParams()
    //eslint-disable-next-line
    useEffect(() => {
        axios.get(
          `https://api.coinlore.net/api/ticker/?id=${id}`
          ).then((response)=>{
            console.log(response.data[0])
            setCoin({ name:response.data[0].name,
            symbol:response.data[0].symbol,
            price_btc:response.data[0].price_btc,
            price_usd:response.data[0].price_usd,
            volume24:response.data[0].volume24 })
          })
        },[])
    return (
        <div>
            <h1>Name: {coin.name}</h1>
            <h1>Symbol: {coin.symbol}</h1>
            <h1>Price_btc: {coin.price_btc}</h1>
            <h1>Price in usd: {coin.price_usd}</h1>
            <h1>Volume in the last 24 hours: {coin.volume24}</h1>
        </div>
    )
}

export default Coin
