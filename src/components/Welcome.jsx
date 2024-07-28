import { useState } from "react"
import { FaArrowAltCircleDown } from "react-icons/fa"


const Welcome = () => {
    const [showAccounts, setShowAccounts] = useState(false)
    const [showCurrency, setCurrency] = useState(false)
    const [currencies, setCurrencies] = useState(["USD", "AUD"])
    const [displayedCurrency, setDisplayedCurrency] = useState("USD")
  return (
    <div className="lg:px-16 md:px-10 px-5 flex justify-between border-b py-2">
        <h2 className="text-sm">Welcome to Worldwide Electronic Store</h2>

        <div className="flex items-center gap-4">
            <div className="relative">
                <div onClick={()=> setShowAccounts(!showAccounts)} className="flex items-center gap-2 cursor-pointer">
                    <span className="text-sm text-[#666666] hover:text-[#000]">My Account</span>
                    <FaArrowAltCircleDown />
                </div>
                
                <div className={`absolute bg-white top-[28px] right-0 border-2 px-4 py-2 w-[150px] flex flex-col items-start ${!showAccounts ? "hidden" : ""}`}>
                    <button onClick={()=> setShowAccounts(!showAccounts)} className="text-[#666666] font-semibold text-sm hover:text-[#000]">Sign In</button>
                    <button onClick={()=> setShowAccounts(!showAccounts)} className="text-[#666666] font-semibold text-sm hover:text-[#000]">Register</button>
                </div>
            </div>
            <button className="text-[#666666] text-sm hover:text-[#000]">Checkout</button>
            <div className="relative">
                <div onClick={()=> setCurrency(!showCurrency)} className="flex items-center gap-2 cursor-pointer">
                    <span className="text-sm text-[#666666] hover:text-[#000]">{displayedCurrency}</span>
                    <FaArrowAltCircleDown />
                </div>
                
                <div className={`absolute bg-white top-[28px] right-0 border-2 px-4 py-2 w-[150px] flex flex-col items-start ${!showCurrency ? "hidden" : ""}`}>
                    {currencies.map((currency) => 
                    <button key={Math.random()} onClick={(current) => { setCurrency(!showCurrency);setDisplayedCurrency(current.target.innerHTML)}} className="text-[#666666] font-semibold text-sm hover:text-[#000]">{currency}</button>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome