import React,{useState,useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Main = () => {
    const [cryptoList, setCryptoList] = useState([])
    let history = useHistory();
    useEffect(() => {
    axios.get(
      'https://api.coinlore.net/api/tickers/?start=0&limit=20'
      ).then((response)=>{
        setCryptoList(response.data['data'])
      })
    }, [])
    return (
        <>
      <div id="header">
      <h1>CryptoLand</h1>
      </div>
        <div className="cryptoList">
        {cryptoList.map((coin)=> {
          return (
            <div onClick={()=>history.push(`/coin/${coin.id}`)}>
            {""}
          <h1>{coin.symbol}</h1>
          <h1>{coin.price_usd}</h1>
          </div>
          )
        })}
        </div>
        </>
    )
}

export default Main

