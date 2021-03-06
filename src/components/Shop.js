import React, { useState } from "react"
import { Link } from "react-router-dom"
import ReactTooltip from "react-tooltip"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"

const Shop = () => {
    let shopItems = []
    ;(shopItems = []).length = 20
    shopItems.fill("Item")

    const defaultShopName = "My new shop!"
    const defaultShopDescription =
        "Welcome to my shop, money raised goes to supporting our photographers in need."

    const [shopName, setShopName] = useState(defaultShopName)
    const [newShopName, setNewShopName] = useState("")
    const changeShopName = () => {
        setShopName(newShopName)
    }

    const [shopDescription, setShopDescription] = useState(defaultShopDescription)
    const [newShopDescription, setNewShopDescription] = useState("")
    const changeShopDescription = () => {
        if (!newShopDescription) {
            setShopDescription(defaultShopDescription)
        } else setShopDescription(newShopDescription)
    }

    return (
        <div>
            <ReactTooltip />
            <div className="bg-yellow-50 font-serif min-h-screen">
                <div className="container mx-auto">
                    <div className="h2 text-3xl pt-6 font-bold">Your shop</div>
                    <div className="flex mt-2">
                        <img
                            className="h-20 w-20 ml-2 object-cover border-2 border-gray-600"
                            src="https://images.unsplash.com/photo-1530842128367-9e448d986a75?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRzaG90fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                        <div className="text-2xl pt-5 pl-4 font-bold">{shopName}</div>
                        <div className="mt-4 ml-1">
                            <Popup
                                trigger={
                                    <button className="border-2 border-yellow-50 rounded-sm focus:outline-none focus:border-purple-200">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 33 33"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="hover:bg-gray-300"
                                            data-tip="Change your shop name"
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
                                }
                                position="top right"
                            >
                                <div className="py-2">
                                    <div className="text-center border-b-2 border-purple-400">
                                        Enter new shop name
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="text-center focus:outline-none focus:bg-purple-50"
                                            onChange={(e) => {
                                                setNewShopName(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="pt-1 flex justify-center">
                                        <div>
                                            <button
                                                className="ml-2 bg-green-200 rounded-lg px-2 hover:bg-green-400 focus:outline-none"
                                                onClick={changeShopName}
                                            >
                                                {" "}
                                                Save
                                            </button>
                                        </div>
                                        <div>
                                            <button className="ml-2 bg-red-300 rounded-lg px-2 hover:bg-red-500 focus:outline-none">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Popup>
                        </div>
                    </div>
                    <div className="flex pt-6">
                        <div className="mr-1 ">
                            <Popup
                                trigger={
                                    <button className="border-2 border-yellow-50 rounded-sm focus:outline-none focus:border-purple-200">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 33 33"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="hover:bg-gray-300"
                                            data-tip="Change your shop description"
                                            onClick={() => setNewShopDescription("")}
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
                                }
                                modal
                            >
                                {(close) => (
                                    <div className="bg-yellow-50">
                                        <div className="w-full text-center font-medium p-2">
                                            {" "}
                                            Enter a description for your shop{" "}
                                        </div>
                                        <textarea
                                            className="w-full rounded-md focus:outline-none border-2 focus:border-purple-500 px-1"
                                            rows="4"
                                            placeholder="Write a small description of your shop"
                                            type="text"
                                            onChange={(e) => {
                                                setNewShopDescription(e.target.value)
                                            }}
                                        ></textarea>
                                        <div className="pt-2">
                                            <button
                                                className="rounded-md px-2 bg-purple-200 hover:bg-purple-400"
                                                onClick={() => {
                                                    close()
                                                    changeShopDescription()
                                                }}
                                            >
                                                Save
                                            </button>
                                            <button
                                                className="rounded-md px-2 ml-2 bg-red-100 hover:bg-purple-200"
                                                onClick={close}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </div>
                        <div className="text-lg  font-medium">{shopDescription}</div>
                    </div>
                    <div className="flex">
                        <div className="text-lg py-6">Items currently listed: </div>
                    </div>
                    <div className="">
                        <div className="grid grid-cols-4 gap-2 lg:grid-cols-5">
                            <Link
                                to="add"
                                className="border-2 border-gray-400 flex justify-center items-center w-64 h-64 hover:border-purple-500"
                            >
                                <div className>
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-9 stroke-current stroke-2 text-gray-400"
                                    >
                                        <path
                                            d="M9 20H31"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M20 9V31"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <circle cx="20" cy="20" r="19" />
                                    </svg>
                                    <div className="mt-1 text-gray-800">Add a new item</div>
                                </div>
                            </Link>
                            {shopItems.map((item) => (
                                <div className="">
                                    <div className="relative border-2 border-gray-400 flex justify-center items-center w-64 h-64">
                                        <div className="flex justify-items-stretch items-center text-right">
                                            {item}
                                        </div>
                                        <button>
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 33 33"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="absolute top-0 right-4 mr-1 mt-1 rounded-md hover:bg-gray-300"
                                                data-tip="Edit item"
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
                                                data-tip="Remove item"
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
