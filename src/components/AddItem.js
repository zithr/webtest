import { useState } from "react"
import { Link } from "react-router-dom"
import ReactTooltip from "react-tooltip"
import { images } from "./images/images.js"

const AddItem = () => {
    const [previewFile, setPreviewFile] = useState([])

    const changeHandler = (event) => {
        setPreviewFile([...previewFile, URL.createObjectURL(event.target.files[0])])
        console.log(previewFile)
    }

    const handleSubmission = () => {}
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
                        <div className="mt-3 flex">
                            {previewFile.map((item, index) => (
                                <div
                                    className="flex pr-1 w-24 h-24 justify-center cursor-pointer"
                                    // Clicking on the image removes it from 'previewFile' array
                                    onClick={() => {
                                        setPreviewFile([
                                            ...previewFile.slice(0, index),
                                            ...previewFile.slice(index + 1),
                                        ])
                                    }}
                                >
                                    <img
                                        src={item}
                                        alt=""
                                        className="flex object-cover w-full justify-center"
                                    />
                                </div>
                            ))}
                        </div>
                        <ReactTooltip />
                        <div class="mt-2 flex items-center justify-center ">
                            <label class="border-2 border-purple-100 w-36 flex flex-col items-center p-2 bg-white text-purple-300 rounded-lg shadow-md cursor-pointer hover:bg-blue hover:text-purple-500 hover:border-purple-300">
                                <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span class="mt-2 text-base leading-normal">Upload Images</span>
                                <input type="file" class="hidden" onChange={changeHandler} />
                            </label>
                        </div>

                        <form action="" className="mt-2 py-2 grid grid-cols-3 gap-3">
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
                            <label>Category</label>
                            <select>
                                <option value="Books">Books</option>
                                <option selected value="Clothes">
                                    Clothes
                                </option>
                                <option value="Electronics">Electronics</option>
                                <option value="Jewellery">Jewellery</option>
                                <option value="Toys">Toys</option>
                            </select>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current text-purple-600 stroke-1"
                                data-tip="Type of item"
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
                            {images.plussign}

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
