import React, { useState } from "react"
import { Link } from "react-router-dom"

const ImageSearch = ({ searchText, setImages }) => {
    const [text, setText] = useState("")
    const onSubmit = (e) => {
        e.preventDefault()

        setImages([])
        searchText(text)
    }

    return (
        <div className="max-w-sm rounded my-1 -mt-1 mx-auto">
            <form onSubmit={onSubmit} className="w-96 max-w-lg">
                <div className="flex group items-center">
                    <input
                        onChange={(e) => setText(e.target.value)}
                        className="appearance-none bg-transparent w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none  border-b-2 border-purple-200 py-2 focus:border-purple-300"
                        type="text"
                        placeholder="Search for images..."
                    />
                    <Link
                        to="/search"
                        className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white px-2 rounded"
                        type="submit"
                    >
                        Search
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch
