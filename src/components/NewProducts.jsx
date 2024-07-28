import { FaEdit } from "react-icons/fa"
import { newProducts } from "../data/newProducts"
import { FaCodeCompare, FaStar } from "react-icons/fa6"
const NewProducts = () => {
  return (
    <div className="space-y-4 lg:px-16 md:px-10 px-5">

        <h2 className="font-bold lg:text-xl md:text-lg text-md">New Products</h2>
        <div className="grid grid-cols-5 gap-5 max-[986px]:grid-cols-4 max-[783px]:grid-cols-3 max-[566px]:grid-cols-2 max-[372px]:grid-cols-1">

            {
                newProducts.map((newProduct) => (
                    <div key={Math.random()} className="newProductBg border relative overflow-hidden flex flex-col gap-2 items-center p-4">
                        <img className="w-[200px]" src={newProduct.image} alt={newProduct.productName} />
                        <p className="text-sm font-semibold">{newProduct.title}</p>
                        <p className="text-sm font-semibold text-blue-700 text-center">{newProduct.productName}</p>
                        <p className="font-semibold">{newProduct.price}</p>
                        <button className="actionButton absolute top-[-200px] w-full border-2 border-[#000] rounded-2xl px-4 py-[3px] hover:bg-[#000] hover:text-white">Add to cart</button>

                        <div className="actions absolute top-2 right-[-50px] transition-all duration-100 space-y-2">
                            <div title="Edit" className="bg-gray-200 p-2 cursor-pointer rounded-[50%]"><FaEdit /></div>
                            <div title="Add to WishList" className="bg-gray-200 p-2 cursor-pointer rounded-[50%]"><FaStar /></div>
                            <div title="Compare" className="bg-gray-200 p-2 cursor-pointer rounded-[50%]"><FaCodeCompare /></div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default NewProducts