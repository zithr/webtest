import { useState } from "react"
import { Link } from "react-router-dom"
import ReactTooltip from "react-tooltip"
import { images } from "./images/images.js"
import axios from "axios"

const AddItem = () => {
    const [uploadFiles, setUploadFiles] = useState([])
    const [maxImagesReached, setMaxImagesReached] = useState(false)
    const [itemName, setItemName] = useState("")
    const [itemCategory, setItemCategory] = useState("Clothes")
    const [itemTags, setItemTags] = useState("")
    const [itemPrice, setItemPrice] = useState("")
    const [itemDescription, setItemDescription] = useState("")
    const [itemListed, setItemListed] = useState(0)
    const [nameError, setNameError] = useState(false)
    const [tagsError, setTagsError] = useState(false)
    const [priceError, setPriceError] = useState(false)
    const [descriptionError, setDescriptionError] = useState(false)

    let formReady = false

    const changeHandler = (event) => {
        if (uploadFiles.length > 3) {
            setUploadFiles([...uploadFiles, URL.createObjectURL(event.target.files[0])])
            setMaxImagesReached(true)
        }
    }

    const checkFields = () => {
        if (!itemName) {
            setNameError(true)
        } else {
            setNameError(false)
        }
        if (!itemTags) {
            setTagsError(true)
        } else {
            setTagsError(false)
        }
        if (!itemPrice) {
            setPriceError(true)
        } else {
            setPriceError(false)
        }
        if (itemDescription.length > 200) {
            setDescriptionError(true)
        } else {
            setDescriptionError(false)
        }
        if (!nameError && !tagsError && !priceError && !descriptionError) {
            formReady = true
        }
    }

    const handleSubmission = async (e) => {
        e.preventDefault()
        checkFields()

        if (formReady) {
            setItemListed(1)
            let itemTagsList = itemTags.split(", ")

            axios({
                method: "post",
                url: "https://api.testbro.tk/users/me/add",
                data: JSON.stringify({
                    name: itemName,
                    category: itemCategory,
                    tags: itemTagsList,
                    price: itemPrice,
                    description: itemDescription,
                    listed: itemListed,
                    complete: 1,
                }),
                // headers: { "Content-Type": "multipart/form-data" },
            })
                .then(function (response) {
                    console.log("axios create item success")
                    //console.log(data)
                    //handle success
                })
                .catch(function (response) {
                    console.log("axios create item error")
                    //handle error
                })

            // let data = new FormData()
            // uploadFiles.map((image, index) => data.append(`image${index}`, image))
            // console.log("axios post")
            // axios({
            //     method: "post",
            //     url: "https://api.testbro.tk/image/add",
            //     data: data,
            //     // headers: { "Content-Type": "multipart/form-data" },
            // })
            //     .then(function (response) {
            //         console.log("axios image upload success")
            //         //handle success
            //     })
            //     .catch(function (response) {
            //         console.log("axios error")
            //         //handle error
            //         console.log(response)
            //     })
        }
    }
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
                                                setMaxImagesReached(false)
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
                                {!maxImagesReached ? (
                                    <>
                                        <span class="text-base leading-normal">Upload Images</span>
                                        <input
                                            type="file"
                                            class="hidden"
                                            onChange={changeHandler}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <span class="text-base leading-normal">
                                            Max of 5 images
                                        </span>
                                    </>
                                )}
                            </label>
                        </div>

                        <div action="" className="mt-2 py-2 grid grid-cols-3 gap-3">
                            <label className="">Name</label>
                            <input
                                className={`focus:outline-none border-2 focus:border-purple-500 px-1 ${
                                    nameError && "border-red-700"
                                }`}
                                placeholder=""
                                type="text"
                                required="true"
                                onChange={(e) => setItemName(e.target.value)}
                            />
                            <div className="flex">
                                {nameError && (
                                    <span className="text-xs text-red-400">Invalid name</span>
                                )}
                                <span
                                    className="ml-1"
                                    data-tip="A name to help you and others quickly identify your item"
                                >
                                    {images.circleplus}
                                </span>
                            </div>
                            <label>Category</label>
                            <select onChange={(e) => setItemCategory(e.target.value)}>
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
                                className={`focus:outline-none border-2 focus:border-purple-500 px-1 ${
                                    tagsError && "border-red-700"
                                }`}
                                type="text"
                                required="true"
                                placeholder="#blue #bird #sky"
                                onChange={(e) => setItemTags(e.target.value)}
                            />
                            <span data-tip="Tags to help others find this type of item">
                                {images.plussign}
                            </span>
                            <label>Price</label>
                            <input
                                className={`focus:outline-none border-2 focus:border-purple-500 px-1 ${
                                    priceError && "border-red-700"
                                }`}
                                type="text"
                                required="true"
                                placeholder="0.00"
                                onChange={(e) => setItemPrice(e.target.value)}
                            />
                            <div className="flex">
                                {priceError && (
                                    <span className="text-xs text-red-400">Invalid price</span>
                                )}
                                <span data-tip="Price your item">{images.circleplus}</span>
                            </div>
                            <label>Description</label>
                            <textarea
                                className={`focus:outline-none border-2 focus:border-purple-500 px-1 ${
                                    descriptionError && "border-red-700"
                                }`}
                                rows="3"
                                placeholder="Write a small description of your item"
                                type="text"
                                required="true"
                                onChange={(e) => setItemDescription(e.target.value)}
                            />
                            <div className="flex">
                                {descriptionError && (
                                    <span className="text-xs text-red-400">
                                        Description too long.
                                    </span>
                                )}
                                <span data-tip="Provide any relevant additional information about your item, e.g. defects, stains, tears etc.">
                                    {images.circleplus}
                                </span>
                            </div>

                            <button
                                className="bg-purple-500 text-2xl col-span-2 rounded-lg shadow-xl text-gray-100 hover:bg-purple-600"
                                data-tip="List your item in your shop!"
                                onClick={handleSubmission}
                            >
                                List item
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItem
