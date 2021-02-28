const News = () => {
    return (
        <div>
            <div className="bg-blue-300 min-h-screen font-serif">
                <div className="container mx-auto w-3/6 bg-white rounded shadow-lg p-8">
                    <div className="h2 text-3xl pt-6 font-bold">Add item:</div>
                    <div className="">
                        <div className="text-lg py-4">Add item fields here</div>
                        <button className="text-lg rounded-lg shadow-md p-2 bg-blue-300 text-gray-100 hover:bg-blue-500">
                            Upload image(s)
                        </button>
                        <form action="" className="py-2 grid grid-cols-2 max-w-md gap-3">
                            <label className="">Name</label>
                            <input
                                className="focus:outline-none border-2 focus:border-blue-500"
                                type="text"
                            />
                            <label>Tags</label>
                            <input
                                className="focus:outline-none border-2 focus:border-blue-500"
                                type="text"
                            />
                            <label>Price</label>
                            <input
                                className="focus:outline-none border-2 focus:border-blue-500"
                                type="text"
                            />
                            <button className="bg-blue-500 text-2xl col-span-2 rounded-lg shadow-xl text-gray-100 hover:bg-blue-600">
                                List item
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
