import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ImageSearch from "./ImageSearch"

const Header = ({ setTerm, setImages }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <nav className="sticky top-0 flex items-center justify-between bg-gray-800 p-2">
            <div className="flex">
                <div className="mr-6">
                    <Link to="/" className="self-end text-white font-bold text-xl">
                        hub
                    </Link>
                </div>

                <Link to="/" className="self-end text-sm text-blue-300 hover:text-white mr-4">
                    Home
                </Link>
                {isLoggedIn && (
                    <Link
                        to="/account"
                        className="self-end text-sm text-blue-300 hover:text-white mr-4"
                    >
                        Your Account
                    </Link>
                )}
                <Link to="/search" className="self-end text-sm text-blue-300 hover:text-white mr-4">
                    Search
                </Link>
            </div>
            <ImageSearch searchText={(text) => setTerm(text)} setImages={setImages} />
            <div className="text-sm sm:flex-row-reverse">
                {isLoggedIn ? (
                    <>
                        <span className="text-blue-300 text-md">Hello, team</span>
                        <button
                            className="pl-2 text-blue-300 hover:text-white mr-4"
                            onClick={() => {
                                alert("You've been signed out.")
                                setIsLoggedIn(false)
                            }}
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            to="/create"
                            className="self-end text-sm text-blue-300 hover:text-white mr-4"
                        >
                            Create Account
                        </Link>
                        <button
                            className="self-end text-blue-300 hover:text-white mr-4"
                            onClick={() => {
                                alert("You have logged in")
                                setIsLoggedIn(true)
                            }}
                        >
                            Sign In
                        </button>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Header
