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
        <div className="max-w-sm rounded overflow-hidden my-2 mx-auto">
            <form onSubmit={onSubmit} className="w-96 max-w-lg">
                <div className="flex items-center border-b-2 border-purple-200 py-2">
                    <input
                        onChange={(e) => setText(e.target.value)}
                        className="appearance-none bg-transparent w-full text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Search for images..."
                    />
                    <Link
                        to="/"
                        className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded"
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
