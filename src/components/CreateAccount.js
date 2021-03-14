import { useState } from "react"
import axios from "axios"

const CreateAccount = () => {
    const [accountCreated, setAccountCreated] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [emailid, setEmailId] = useState("")
    const [password, setPassword] = useState("")
    const [accountInfo, setAccountInfo] = useState([])
    const onSubmit = async (e) => {
        e.preventDefault()

        setAccountInfo([firstName, secondName, emailid, password])
        // validate data, success/fail box

        // Request to create account
        let headerData = new Headers()
        // headerData.append("Accept", "*")
        // headerData.append("Access-Control-Allow", "*")
        // headerData.append("Content-Type", "application/json")
        // headerData.append("Access-Control-Allow-Origin", "*")
        // headerData.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
        // headerData.append("Access-Control-Allow-Headers", "*")
        let requestOptions = {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
                username: firstName,
                email: emailid,
                full_name: `${firstName} ${secondName}`,
                hashed_password: password,
            }),
            // headers: {
            //     Accept: "application/json",
            //     "Content-Type": "application/json",
            // },
            // credentials: "include",
        }
        console.log("Creating account", firstName, secondName, emailid, password, accountInfo)
        let response = await fetch("https://api.testbro.tk/users/add", requestOptions)
        // let response = await fetch("http://localhost:5000/users/add", requestOptions)
        console.log("res:", response)
        console.log("hello???")
        if (response.ok) {
            let data = await response.json()
            console.log(data)
            setAccountCreated(true)
            console.log(accountCreated)
        }
    }

    return (
        <div className="bg-indigo-200 min-h-screen">
            <div className="container mx-auto w-3/6 bg-white rounded shadow-lg p-8">
                {accountCreated ? (
                    <div className="text-2xl flex items-center text-gray-800 font-serif mx-auto py-2">
                        Account created!
                    </div>
                ) : (
                    <>
                        <div className="text-2xl flex items-center text-gray-800 font-serif mx-auto py-2">
                            Create your Account:
                        </div>
                        <form onSubmit={onSubmit} class="mb-6" action="/" method="post">
                            <div class="flex flex-col mb-4">
                                <label
                                    class="mb-2 uppercase font-bold text-lg text-grey-darkest"
                                    for="first_name"
                                >
                                    First Name
                                </label>
                                <input
                                    class="outline-none border py-2 px-3 text-grey-darkest focus:ring-2 focus:ring-blue-500"
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    placeholder="First Name"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div class="flex flex-col mb-4">
                                <label
                                    class="mb-2 uppercase font-bold text-lg text-grey-darkest"
                                    for="last_name"
                                >
                                    Last Name
                                </label>
                                <input
                                    class="outline-none border py-2 px-3 text-grey-darkest focus:ring-2 focus:ring-blue-500"
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    placeholder="Last Name"
                                    onChange={(e) => setSecondName(e.target.value)}
                                />
                            </div>
                            <div class="flex flex-col mb-4">
                                <label
                                    class="mb-2 uppercase font-bold text-lg text-grey-darkest"
                                    for="email"
                                >
                                    Email
                                </label>
                                <input
                                    class="outline-none border py-2 px-3 text-grey-darkest focus:ring-2 focus:ring-blue-500"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email Address"
                                    onChange={(e) => setEmailId(e.target.value)}
                                />
                            </div>
                            <div class="flex flex-col mb-6">
                                <label
                                    class="mb-2 uppercase font-bold text-lg text-grey-darkest"
                                    for="password"
                                >
                                    Password
                                </label>
                                <input
                                    class="outline-none border py-2 px-3 text-grey-darkest focus:ring-2 focus:ring-blue-500"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                class="block bg-green-600 hover:bg-green-300 text-white uppercase text-lg mx-auto p-4 rounded"
                                type="submit"
                            >
                                Create Account
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}

export default CreateAccount
