import { useState } from "react"
import axios from "axios"

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("")
    const [fieldErrors, setFieldErrors] = useState({
        oldPassword: false,
        newPassword: false,
        verifyPassword: false,
    })

    const checkFields = () => {
        setFieldErrors({
            ...fieldErrors,
            oldPassword: "" === oldPassword,
            verifyPassword: newPassword === verifyPassword,
        })
        console.log(newPassword, verifyPassword)

        // if (newPassword === verifyPassword) {
        //     setFieldErrors({ ...fieldErrors, verifyPassword: false })
        // } else {
        //     setFieldErrors({ ...fieldErrors, verifyPassword: true })
        // }
    }

    const onSubmit = async (e) => {
        e.preventDefault()
    }

    const handleSubmission = async (e) => {
        e.preventDefault()
        checkFields()
    }
    return (
        <div className="bg-indigo-200 min-h-screen">
            <div className="container mx-auto w-3/6 bg-white rounded shadow-lg p-8">
                <div className="text-2xl flex items-center text-gray-800 font-serif mx-auto py-2">
                    Change password
                </div>
                <div className="mt-3 max-w-xl">
                    Strong password required. Enter 8-16 characters. Do not include common words or
                    names. Combine uppercase and lowercase letters, numbers and symbols.
                </div>
                <div className="flex">
                    <form onSubmit={onSubmit} className="" action="/" method="post">
                        <div className="flex flex-col">
                            <label
                                className="mt-6 font-bold text-md text-grey-darkest"
                                for="old_password"
                            >
                                Old password
                            </label>
                            <input
                                className={`mt-2 px-1 outline-none border text-grey-darkest focus:ring-2 focus:ring-blue-500 ${
                                    fieldErrors.oldPassword && "border-red-700"
                                }`}
                                type="password"
                                name="old_password"
                                id="old_password"
                                placeholder="Old Password"
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                            {fieldErrors.oldPassword && (
                                <span className="text-xs text-red-400">Password is incorrect</span>
                            )}
                            <label
                                className="mt-6 font-bold text-md text-grey-darkest"
                                for="new_password"
                            >
                                Create new password
                            </label>
                            <input
                                className="mt-2 px-1 outline-none border text-grey-darkest focus:ring-2 focus:ring-blue-500"
                                type="password"
                                name="new_password"
                                id="new_password"
                                placeholder="New Password"
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <label
                                className="mt-6 font-bold text-md text-grey-darkest"
                                for="verify_password"
                            >
                                Confirm new password
                            </label>
                            <input
                                className="mt-2 px-1 outline-none border text-grey-darkest focus:ring-2 focus:ring-blue-500"
                                type="password"
                                name="verify_password"
                                id="verify_password"
                                placeholder="Verify New Password"
                                onChange={(e) => setVerifyPassword(e.target.value)}
                            />
                            {fieldErrors.verifyPassword && (
                                <span className="text-xs text-red-400">Passwords do not match</span>
                            )}
                        </div>
                        <button
                            className="mt-6 px-6 py-1 bg-purple-500 text-lg rounded-sm shadow-xl text-gray-100 hover:bg-purple-600"
                            onClick={handleSubmission}
                        >
                            submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
