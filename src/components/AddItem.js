import { Link } from "react-router-dom"
import ReactTooltip from "react-tooltip"

const AddItem = () => {
    return (
        <div className="flex flex-1 justify-center bg-yellow-50">
            <div className="font-serif">
                <div className="mt-2 bg-white rounded shadow-lg p-8">
                    <div className="flex">
                        <div className="h2 text-3xl pt-6 font-bold">Add item:</div>
                        <div className="pl-80 pt-3">
                            <Link
                                to="/yourshop"
                                className="self-center rounded-lg shadow-md my-2 p-2 bg-purple-300 text-gray-100 hover:bg-purple-500"
                            >
                                Save for later
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <ReactTooltip />

                        <button className="text-lg rounded-lg shadow-md my-2 p-2 bg-purple-300 text-gray-100 hover:bg-purple-500">
                            Upload image(s)
                        </button>
                        <form action="" className="py-2 grid grid-cols-3 gap-3">
                            <label className="">Name</label>
                            <input
                                className="focus:outline-none border-2 focus:border-purple-500 px-1"
                                placeholder=""
                                type="text"
                                required="true"
                            />
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current text-purple-600 stroke-1"
                                data-tip="A name to help you and others quickly identify your item"
                            >
                                <path
                                    d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                                    stroke-miterlimit="10"
                                />
                                <path
                                    d="M11 16H21"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M16 11V21"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <label>Tags</label>
                            <input
                                className="focus:outline-none border-2 focus:border-purple-500 px-1"
                                type="text"
                                required="true"
                                placeholder="#blue #bird #sky"
                            />
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current text-purple-600 stroke-1"
                                data-tip="Tags to help others find this type of item"
                            >
                                <path
                                    d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                                    stroke-miterlimit="10"
                                />
                                <path
                                    d="M11 16H21"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M16 11V21"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <label>Price</label>
                            <input
                                className="focus:outline-none border-2 focus:border-purple-500 px-1"
                                type="text"
                                required="true"
                                placeholder="0.00"
                            />
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current text-purple-600 stroke-1"
                                data-tip="Price your item"
                            >
                                <path
                                    d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                                    stroke-miterlimit="10"
                                />
                                <path
                                    d="M11 16H21"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M16 11V21"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <label>Description</label>
                            <textarea
                                className="focus:outline-none border-2 focus:border-purple-500 px-1"
                                rows="3"
                                placeholder="Write a small description of your item"
                                type="text"
                                required="true"
                            />
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current text-purple-600 stroke-1"
                                data-tip="Provide any relevant additional information about your item, e.g. defects, stains, tears etc."
                            >
                                <path
                                    d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                                    stroke-miterlimit="10"
                                />
                                <path
                                    d="M11 16H21"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M16 11V21"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <button
                                className="bg-purple-500 text-2xl col-span-2 rounded-lg shadow-xl text-gray-100 hover:bg-purple-600"
                                data-tip="List your item in your shop!"
                            >
                                List item
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItem
