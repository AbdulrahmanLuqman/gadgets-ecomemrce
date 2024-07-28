import { topCategories } from "../data/topCategory"

const TopCategory = () => {
  return (
    <div className="lg:px-16 md:px-10 px-5 space-y-4 mb-16">
        <h2 className="font-bold lg:text-xl md:text-lg text-md">Top Categories <span className="font-normal">Of The Month</span></h2>
        <div className="grid grid-cols-5 max-[774px]:grid-cols-3 max-[420px]:grid-cols-2 max-[311px]:grid-cols-1">
            {
                topCategories.map((topCategory) => (
                    <div key={Math.random()} className="bg-white w-full flex items-center gap-4 p-2 border max-[1190px]:flex-col max-[774px]:flex-row max-[675px]:flex-col">
                        <div className="space-y-3">
                            <p className="font-semibold text-[12px]">#{topCategory.title}</p>
                            <button className="text-[12px] text-[#666666]">Shop Now</button>
                        </div>
                        <img className="w-[100px]" src={topCategory.image} alt={topCategory.title} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TopCategory