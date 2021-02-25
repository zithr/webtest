import { useState } from "react"

const CreateAccount = () => {
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [emailid, setEmailId] = useState("")
    const [password, setPassword] = useState("")
    const [accountInfo, setAccountInfo] = useState([])
    const onSubmit = (e) => {
        e.preventDefault()

        setAccountInfo([firstName, secondName, emailid, password])
        // validate data, success/fail box
    }

    return (
        <div className="bg-indigo-200 h-screen">
            <div className="container mx-auto w-full bg-white rounded shadow-lg p-8">
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
            </div>
        </div>
    )
}

export default CreateAccount
