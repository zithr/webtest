import { useState } from "react"
import { Link } from "react-router-dom"
import ReactTooltip from "react-tooltip"
import { images } from "./images/images.js"

const AddItem = () => {
    const [uploadFiles, setUploadFiles] = useState([])

    const changeHandler = (event) => {
        setUploadFiles([...uploadFiles, URL.createObjectURL(event.target.files[0])])
    }

    const handleSubmission = () => {}
    return (
        <div className="flex flex-1 justify-center bg-yellow-50">
            <ReactTooltip />
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
                            {uploadFiles.map((item, index) => (
                                <div className="flex pr-1 justify-center">
                                    <div className="w-24 h-24 flex-col justify-items-center">
                                        <img
                                            src={item}
                                            alt=""
                                            className="flex object-cover w-full justify-center"
                                        />
                                        <div
                                            className="flex justify-center cursor-pointer"
                                            // Clicking removes it from 'uploadFiles' array
                                            onClick={() => {
                                                setUploadFiles([
                                                    ...uploadFiles.slice(0, index),
                                                    ...uploadFiles.slice(index + 1),
                                                ])
                                            }}
                                        >
                                            {images.xsign}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div class="flex items-center justify-center ">
                            <label class="border-2 border-purple-100 w-36 flex flex-col items-center p-2 bg-white text-purple-300 rounded-lg shadow-md cursor-pointer hover:bg-blue hover:text-purple-500 hover:border-purple-300">
                                {images.uploadicon}
                                <span class="text-base leading-normal">Upload Images</span>
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
                            <span data-tip="A name to help you and others quickly identify your item">
                                {images.circleplus}
                            </span>
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
                            <span data-tip="Type of item">{images.circleplus}</span>
                            <label>Tags</label>
                            <input
                                className="focus:outline-none border-2 focus:border-purple-500 px-1"
                                type="text"
                                required="true"
                                placeholder="#blue #bird #sky"
                            />
                            <span data-tip="Tags to help others find this type of item">
                                {images.plussign}
                            </span>
                            <label>Price</label>
                            <input
                                className="focus:outline-none border-2 focus:border-purple-500 px-1"
                                type="text"
                                required="true"
                                placeholder="0.00"
                            />
                            <span data-tip="Price your item">{images.circleplus}</span>
                            <label>Description</label>
                            <textarea
                                className="focus:outline-none border-2 focus:border-purple-500 px-1"
                                rows="3"
                                placeholder="Write a small description of your item"
                                type="text"
                                required="true"
                            />
                            <span data-tip="Provide any relevant additional information about your item, e.g. defects, stains, tears etc.">
                                {images.circleplus}
                            </span>

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
