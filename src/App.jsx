import { use, useState } from "react"
import InputBox from "./components/InputBox"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [amount,setAmount] = useState();
  const [converted,setConverted] = useState(0);
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo);

  const calculate = () => {
    setConverted(amount * currencyInfo[to])
  }

  const reset = () => {
    setAmount(0)
    setConverted(0)
  }

  return (
    <>
     <div className='w-full h-screen bg-amber-300 flex  justify-center items-center'>
         <div className="max-w-md gap-2 h-[60%] bg-amber-950 p-3 flex flex-wrap items-center text-white">
           <InputBox 
           tag="From" 
           amount={amount}
           onAmountChange={(amount) => setAmount(amount)}
           selectCurrency={from}
           onCurrencyChange={(currency) => setFrom(currency)}
           currencyoptions={options}
           />
           <InputBox 
           tag="To" 
           amount={converted}
           onAmountChange={(amount) => setConverted(amount)}
           selectCurrency={to}
           onCurrencyChange={(currency) => setTo(currency)}
           currencyoptions={options}
           />

           <button className="w-full p-2 mb-2 bg-amber-300 text-black" onClick={calculate}>
                convert {from.toUpperCase()} to {to.toUpperCase()}
           </button>

           <button className="w-full p-2 bg-red-600 text-white" onClick={reset}>
              Reset
           </button>
         </div>
         
     </div>
    </>
  )
}

export default App
