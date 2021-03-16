import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import axios from "axios"

const Login = ({ auth, uname }) => {
    const [loginStage, setLoginStage] = useState(0)
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const history = useHistory()

    let emailCheck = async (e) => {
        e.preventDefault()
        if (emailInput === "test" || emailInput === "admin1") {
            setLoginStage(1)
        } else {
            setLoginStage(-1)
        }
    }

    let passwordCheck = async (e) => {
        e.preventDefault()
        let bodyFormData = new FormData()
        bodyFormData.append("username", emailInput)
        bodyFormData.append("password", passwordInput)
        console.log("axios post")
        axios({
            method: "post",
            url: "https://api.testbro.tk/token",
            data: bodyFormData,
            // headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                console.log("axios login success")
                //handle success

                const access_token = response.data.access_token
                axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`

                setLoginStage(0) // reset login form to start, find better way to manage login stages/resets
                auth(true)
                uname(emailInput)
                console.log(`auth ${emailInput}`)
                history.push("/")
            })
            .catch(function (response) {
                console.log("axios error")
                //handle error
                console.log(response)
                setLoginStage(-2)
            })

        // if (passwordInput === "test") {
        //     setLoginStage(0) // reset login form to start, find better way to manage login stages/resets
        //     auth(true)
        //     history.push("/")
        // } else {
        //     setLoginStage(-2)
        // }
    }

    return (
        <div
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className="flex flex-1 items-center"
        >
            <div className="bg-white w-96 rounded-xl ml-32 mb-24 shadow-lg">
                <div className="container w-10/12 m-auto">
                    <div className="text-gray-800 font-semibold text-2xl pt-12 italic">hub</div>
                    <div className="text-gray-800 font-semibold text-xl pt-10">Log in</div>
                    {loginStage === -1 || loginStage === 0 ? (
                        <div
                        // className={`${
                        //     loginStage === 1 || loginStage === -1
                        //         ? "transition-opacity opacity-0 duration-500 ease-in-out"
                        //         : "transition-opacity opacity-100 duration-500"
                        // }`}
                        >
                            <div className="text-gray-600">Continue to your shop</div>
                            <div className="flex flex-row-reverse mt-9">
                                <Link
                                    to="/help"
                                    className="text-right text-purple-400 font-medium text-xs hover:text-purple-600"
                                >
                                    Forgot username?
                                </Link>
                            </div>
                            <input
                                className={`mt-1 p-1 block w-full h-12 rounded-md focus:outline-none ${
                                    loginStage === -1
                                        ? "border-2 border-red-500 bg-red-100"
                                        : "border border-gray-500 focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                                }`}
                                type="text"
                                placeholder="Email address"
                                onChange={(e) => setEmailInput(e.target.value)}
                            />
                            {loginStage === -1 && (
                                <div className="mt-2">
                                    <span className="text-red-500 text-xs">
                                        Enter a valid email address
                                    </span>
                                </div>
                            )}
                            <button
                                className="mt-4 w-20 h-12 bg-purple-400 rounded-lg shadow-md text-white font-semibold hover:bg-purple-500"
                                onClick={emailCheck}
                            >
                                Next
                            </button>
                            <div className="text-sm mt-4 pb-12">
                                <span className="">New to Hub?</span>
                                <Link
                                    to="/create"
                                    className="text-purple-400 ml-1 mb-10 hover:text-purple-600"
                                >
                                    Get started
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div
                            // className={`${
                            //     loginStage === 1 || loginStage === -2
                            //         ? "transition-opacity opacity-100 duration-500 ease-in-out"
                            //         : "transition-opacity opacity-0 duration-500"
                            // }`}
                            >
                                <div className="text-gray-600">Enter your password</div>
                                <div className="flex flex-row-reverse mt-9">
                                    <Link
                                        to="/help"
                                        className="text-right text-purple-400 font-medium text-xs hover:text-purple-600"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <input
                                    className={`mt-1 p-1 block w-full h-12 rounded-md focus:outline-none ${
                                        loginStage === -2
                                            ? "border-2 border-red-500 bg-red-100"
                                            : "border border-gray-500 focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                                    }`}
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPasswordInput(e.target.value)}
                                />
                                {loginStage === -2 && (
                                    <div className="mt-2">
                                        <span className="text-red-500 text-xs">
                                            Password incorrect
                                        </span>
                                    </div>
                                )}
                                <button
                                    className="mt-4 w-20 h-12 bg-purple-400 rounded-lg shadow-md text-white font-semibold hover:bg-purple-500"
                                    onClick={passwordCheck}
                                >
                                    Next
                                </button>
                                <div className="text-sm mt-4 pb-12">
                                    <span className="">New to Hub?</span>
                                    <Link
                                        to="/create"
                                        className="text-purple-400 ml-1 mb-10 hover:text-purple-600"
                                    >
                                        Get started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login
