import React from "react"
import { Link } from "react-router-dom"
import ImageSearch from "./ImageSearch"

const Header = ({ setTerm, setImages }) => {
    return (
        <nav className="sticky top-0 flex items-center justify-between bg-gray-800 p-2">
            <div className="flex">
                <div className="mr-6">
                    <div className="self-end text-white font-bold text-xl">hub</div>
                </div>

                <Link to="/home" className="self-end text-sm text-blue-300 hover:text-white mr-4">
                    Home
                </Link>
                <button className="self-end text-sm text-blue-300 hover:text-white mr-4">
                    Your Account
                </button>
                <Link to="/" className="self-end text-sm text-blue-300 hover:text-white mr-4">
                    Search
                </Link>
            </div>
            <ImageSearch searchText={(text) => setTerm(text)} setImages={setImages} />
            <div className="text-sm sm:flex-row-reverse">
                <button className="self-end text-blue-300 hover:text-white mr-4">Sign Out</button>
            </div>
        </nav>
    )
}

export default Header
