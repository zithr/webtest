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
            <div className="bg-blue-300 font-serif min-h-screen">
                <div className="container mx-auto">
                    <div className="h2 text-3xl pt-6 font-bold">Your shop</div>
                    <div className="flex">
                        <div className="text-lg py-6">Items currently listed: </div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="grid grid-cols-4 gap-3">
                            <Link
                                to="add"
                                className="border-2 border-gray-400 flex justify-center items-center w-full max-w-xs h-32 hover:border-blue-500"
                            >
                                Add an item
                            </Link>
                            {shopItems.map((item) => (
                                <div className="relative max-w-xs">
                                    <div className="border-2 border-gray-400 flex justify-center items-center w-full h-32">
                                        <div className="flex justify-items-stretch items-center text-right">
                                            {item}
                                        </div>
                                    </div>
                                    {/* edit button */}
                                    <button>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 33 33"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute top-0 right-4 mr-1 mt-1 rounded-md hover:bg-gray-300"
                                        >
                                            <path
                                                d="M16 23.0001C19.866 23.0001 23 19.8661 23 16.0001C23 12.1341 19.866 9.00006 16 9.00006C12.134 9.00006 9 12.1341 9 16.0001C9 19.8661 12.134 23.0001 16 23.0001Z"
                                                stroke="black"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M27.0001 15.0001L28.2885 13.0676C28.3724 12.9431 28.428 12.8016 28.4511 12.6533C28.4742 12.5049 28.4644 12.3532 28.4223 12.2091C28.1793 11.4087 27.8589 10.6339 27.4658 9.89556C27.3938 9.76413 27.2937 9.65021 27.1726 9.56195C27.0515 9.47368 26.9124 9.41325 26.7652 9.38496L24.4854 8.92897L23.0713 7.51478L22.6153 5.23495C22.587 5.08777 22.5265 4.94865 22.4383 4.82752C22.35 4.7064 22.2361 4.60626 22.1046 4.53425C21.3662 4.14122 20.5914 3.82092 19.791 3.57789C19.6469 3.53582 19.4952 3.526 19.3468 3.54914C19.1985 3.57227 19.057 3.62778 18.9325 3.71173L17.0001 5.00001H15.0001L13.0677 3.71173C12.9432 3.62778 12.8017 3.57227 12.6533 3.54914C12.505 3.526 12.3533 3.53582 12.2092 3.57789C11.4088 3.82092 10.6339 4.14121 9.89557 4.53424C9.76412 4.60625 9.65019 4.70639 9.56192 4.82753C9.47364 4.94866 9.41321 5.08779 9.38492 5.23498L8.92905 7.51466L7.51474 8.92897L5.23503 9.38484C5.08785 9.41313 4.94873 9.47356 4.8276 9.56183C4.70648 9.65009 4.60633 9.76401 4.53432 9.89546C4.14123 10.6338 3.82089 11.4087 3.57782 12.2091C3.53576 12.3533 3.52594 12.5049 3.54908 12.6533C3.57221 12.8016 3.62773 12.9431 3.71168 13.0676L4.99997 15V17L3.71168 18.9324C3.62773 19.0569 3.57222 19.1984 3.54909 19.3468C3.52596 19.4951 3.53577 19.6468 3.57784 19.7909C3.82083 20.5913 4.14112 21.3662 4.53418 22.1046C4.60619 22.236 4.70634 22.3499 4.82746 22.4382C4.94859 22.5265 5.0877 22.5869 5.23488 22.6152L7.51474 23.0712L8.92892 24.4854L9.38481 26.7652C9.41309 26.9124 9.47352 27.0515 9.56178 27.1726C9.65005 27.2938 9.76397 27.3939 9.89541 27.4659C10.6337 27.859 11.4086 28.1793 12.209 28.4223C12.3531 28.4644 12.5047 28.4742 12.6531 28.451C12.8015 28.4279 12.9429 28.3724 13.0674 28.2884L15 27.0001H17L18.9325 28.2885C19.057 28.3725 19.1985 28.428 19.3468 28.4511C19.4952 28.4743 19.6469 28.4644 19.791 28.4224C20.5914 28.1794 21.3662 27.8591 22.1045 27.466C22.236 27.394 22.3499 27.2939 22.4382 27.1728C22.5264 27.0516 22.5868 26.9125 22.6151 26.7653L23.0711 24.4855L24.4853 23.0712L26.7651 22.6153C26.9123 22.587 27.0514 22.5266 27.1726 22.4383C27.2937 22.35 27.3938 22.2361 27.4659 22.1047C27.8589 21.3664 28.1793 20.5915 28.4223 19.7912C28.4644 19.647 28.4742 19.4954 28.4511 19.347C28.428 19.1986 28.3724 19.0572 28.2885 18.9327L27.0001 17.0001V15.0001Z"
                                                stroke="black"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </button>

                                    {/* delete button */}
                                    <button>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute top-0 right-0 mr-1 mt-1 rounded-md hover:bg-gray-300"
                                        >
                                            <path
                                                d="M25 7L7 25"
                                                stroke="black"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M25 25L7 7"
                                                stroke="black"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
