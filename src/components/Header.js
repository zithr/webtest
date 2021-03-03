import React from "react"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import ImageSearch from "./ImageSearch"

const Header = ({ setTerm, setImages, checklogged, logout }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    if (checklogged & !isLoggedIn) {
        setIsLoggedIn(true)
    }

    const [dropDownOpen, setdropDownOpen] = useState(false)
    // const listener = (e) => {
    //     if (!divRef.current || divRef.current.contains(divRef.target)) {
    //         return
    //     }
    //     setdropDownOpen(false)
    //     document.removeEventListener("mousedown", listener)
    // }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setdropDownOpen(false)
                }
            }

            document.addEventListener("mousedown", handleClickOutside)
            return () => {
                document.removeEventListener("mousedown", handleClickOutside)
            }
        }, [ref])
    }

    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef)

    return (
        <nav className="sticky top-0 flex items-center justify-between bg-gray-50 p-2 shadow-md">
            <div className="flex">
                <div className="mr-6">
                    <Link to="/" className="self-end text-black font-bold text-2xl">
                        hub
                    </Link>
                </div>

                <Link
                    to="/"
                    className="self-end text-gray-700 font-semibold text-md hover:text-gray-900 mr-4"
                >
                    Home
                </Link>
                {isLoggedIn && (
                    <Link
                        to="/yourshop"
                        className="self-end text-gray-700 font-semibold text-md hover:text-gray-900 mr-4"
                    >
                        Your Shop
                    </Link>
                )}
                <Link
                    to="/search"
                    className="self-end text-gray-700 font-semibold text-md hover:text-gray-900 mr-4"
                >
                    Search
                </Link>
            </div>
            <ImageSearch searchText={(text) => setTerm(text)} setImages={setImages} />
            <div className="text-md sm:flex-row-reverse">
                {isLoggedIn ? (
                    <div ref={wrapperRef}>
                        <button
                            className="flex mt-2 focus:outline-none"
                            onClick={() => {
                                setdropDownOpen(!dropDownOpen)
                                // document.addEventListener("mousedown", listener)
                            }}
                        >
                            <div className="text-gray-700 font-semibold text-md rounded-lg px-1 pt-2 underline focus:outline-none hover:bg-gray-100">
                                Hello team
                            </div>
                            <img
                                className="h-10 w-10 ml-2 object-cover rounded-full border-2 border-gray-600 hover:border-gray-400"
                                src="https://images.unsplash.com/photo-1530842128367-9e448d986a75?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRzaG90fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            />
                        </button>

                        {dropDownOpen && (
                            <>
                                <div className="absolute border border-gray-200 mt-2 -ml-16 w-44 py-1 bg-white rounded-lg shadow-xl text-sm text-gray-600 font-medium">
                                    <Link
                                        to="/messages"
                                        className="block w-full px-4 py-1 hover:bg-blue-500 text-left hover:text-white"
                                        onClick={() => {
                                            setdropDownOpen(!dropDownOpen)
                                        }}
                                    >
                                        Messages
                                    </Link>
                                    <Link
                                        to="/account"
                                        className="block w-full px-4 py-1 hover:bg-blue-500 text-left hover:text-white"
                                        onClick={() => {
                                            setdropDownOpen(!dropDownOpen)
                                        }}
                                    >
                                        Account settings
                                    </Link>
                                    <Link
                                        to="/help"
                                        className="block  w-full px-4 py-1 hover:bg-blue-500 text-left hover:text-white"
                                        onClick={() => {
                                            setdropDownOpen(!dropDownOpen)
                                        }}
                                    >
                                        Support
                                    </Link>
                                    <Link
                                        to="/"
                                        className="block w-full px-4 py-1 hover:bg-blue-500 text-left hover:text-white"
                                        onClick={() => {
                                            logout()
                                            setIsLoggedIn(false)
                                            setdropDownOpen(!dropDownOpen)
                                        }}
                                    >
                                        Sign Out
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    <>
                        <Link
                            to="/create"
                            className="self-end text-gray-700 font-semibold text-md hover:text-gray-900 mr-4"
                        >
                            Create Account
                        </Link>
                        <Link
                            to="/login"
                            className="self-end text-gray-700 font-semibold text-md hover:text-gray-900 mr-4"
                            // onClick={() => {
                            //     alert("You have logged in")
                            //     setIsLoggedIn(true)
                            // }}
                        >
                            Sign In
                        </Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Header
