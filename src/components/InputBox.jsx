import React from 'react'

function InputBox({
  
    tag,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency,
    currencyoptions = [],
    className = "",

}) {
  return (
   <>
    <div className='w-full bg-white text-gray-900 p-2 flex flex-wrap'>
        <div className='w-full flex justify-between'>
             <span>{tag}</span>
             <span>Currency</span>
        </div>
        <div className='w-full flex flex-wrap'>
               <input type="number"
               placeholder='Amount'
               value={Math.floor(amount)}
               onChange={(e) => onAmountChange(Number(e.target.value))}
               className='w-[80%] outline-none p-1 border-2 border-black mt-1'
                />
                <select
                onChange={(e) => onCurrencyChange(e.target.value)}
                 value={selectCurrency}
                  className='w-[20%] p-1 items-center outline-none'
                  >
                    {currencyoptions.map((current) => (
                         <option key={current} value={current}>{current}</option>
                    )
                    )}
                   
                </select>
        </div>
    </div>   
   </>
  )
}

export default InputBox
