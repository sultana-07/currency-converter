import React,{useState,useEffect} from "react";

function useCurrencyInfo(currency){
    const [data,setdata]  = useState([]);
    useEffect(() => {
        fetch(`https://currency-rate-exchange-api.onrender.com/${currency}`)
        .then(res => res.json())
        .then(res => setdata(res.rates[currency]))
    },[currency])
    return data;
}

export default useCurrencyInfo;