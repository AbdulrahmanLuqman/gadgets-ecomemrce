import logo from "/assets/logo.webp"
import { FaCartShopping, FaCodeCompare, FaHeadphones, FaStar } from "react-icons/fa6"

const LogoAndSearch = () => {
  return (
    <div className="lg:px-16 md:px-10 px-5 py-4 border-b flex justify-between">
        <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" />
            <div className="flex items-center gap-2">
                <FaHeadphones className="text-2xl"/>
                <div className="space-y-3">
                    <p className="text-sm text-[#666666]">Hotline Free:</p>
                    <a className="text-sm font-semibold" href="tel:+2349030316247">+234-903-031-6247</a>
                </div>
            </div>
        </div>

        <div className="border-2 border-[#000] rounded-2xl w-[400px] overflow-hidden flex">
            <input type="text" className="border-none outline h-full w-[70%] p-2"/>
            <button className="text-center w-[30%] bg-[#000] hover:bg-[#161616] h-full text-white font-semibold">Search</button>
        </div>

        <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-[2px]">
                <FaCodeCompare className="text-2xl text-[#666666] hover:text-[#000]"/>
                <p className="text-sm text-[#666666] hover:text-[#000]">Compare</p>
            </div>
            <div className="flex flex-col items-center gap-[2px]">
                <FaStar className="text-2xl text-[#666666] hover:text-[#000]"/>
                <p className="text-sm text-[#666666] hover:text-[#000]">Wish Lists</p>
            </div>
            <div className="flex flex-col items-center gap-[2px]">
                <FaCartShopping className="text-2xl text-[#666666] hover:text-[#000]"/>
                <p className="text-sm text-[#666666] hover:text-[#000]">My Cart</p>
            </div>
        </div>
    </div>
  )
}

export default LogoAndSearch