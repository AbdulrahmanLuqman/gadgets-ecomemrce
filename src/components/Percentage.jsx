import { useState } from "react"
import { FaTimes } from "react-icons/fa"

const Percentage = () => {
  const [isPercentageOpen, setIsPercentageOpen] = useState(true)

  return (
    <div className={`bg-[#5B988E] lg:px-16 md:px-10 px-5 py-2 flex justify-between ${!isPercentageOpen ? "hidden" : ""}`}>
            <p></p>
            <p className="font-semibold text-white">Summer Sale up to 60% OFF selected items</p>
            <FaTimes onClick={()=> setIsPercentageOpen(false)} className="text-white cursor-pointer"/>
    </div>
  )
}

export default Percentage