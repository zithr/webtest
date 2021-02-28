import { Link } from "react-router-dom"

const Shop = () => {
    const shopItems = [
        "Item1",
        "Item2",
        "Item3",
        "Item4",
        "Item5",
        "Item6",
        "Item7",
        "Item8",
        "Item9",
        "Item10",
        "Item11",
        "Item12",
    ]
    return (
        <div>
            <div className="bg-blue-300 h-screen font-serif">
                <div className="container mx-auto">
                    <div className="h2 text-3xl pt-6 font-bold">Your shop</div>
                    <div className="flex">
                        <div className="text-lg py-6">Items currently listed: </div>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                        <Link
                            to="add"
                            className="border-2 border-gray-400 flex justify-center items-center place-items-center w-full max-w-xs h-32"
                        >
                            Add an item
                        </Link>
                        {shopItems.map((item) => (
                            <div className="border-2 border-gray-400 flex justify-center items-center place-items-center w-full max-w-xs h-32">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
