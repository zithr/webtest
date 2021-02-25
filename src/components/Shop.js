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
                        {shopItems.map((item) => (
                            <ul>{item}</ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
