import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import axios from "axios"

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("")
    const [fieldErrors, setFieldErrors] = useState({
        oldPasswordEmpty: false,
        oldPasswordNotMatch: false,
        newPassword: false,
        verifyPassword: false,
    })
    const history = useHistory()

    const checkFields = () => {
        setFieldErrors({
            ...fieldErrors,
            oldPasswordEmpty: "" === oldPassword,
            oldPasswordNotMatch: false,
            verifyPassword: newPassword !== verifyPassword,
        })
        if (
            !fieldErrors.newPassword &&
            !fieldErrors.oldPasswordEmpty &&
            !fieldErrors.oldPasswordNotMatch &&
            !fieldErrors.verifyPassword
        ) {
            return true
        }
        return false
    }

    const handleSubmission = async (e) => {
        e.preventDefault()

        if (!checkFields()) {
            console.log(fieldErrors)
            return
        }

        axios({
            method: "post",
            url: "https://api.testbro.tk/users/me/changepassword",
            data: JSON.stringify({ oldPassword: oldPassword, newPassword: newPassword }),
        })
            .then(function (response) {
                alert("Password has been changed")
                history.push("/")
            })
            .catch(function (error) {
                console.log("change pw error")
                console.log(error)
                console.log(error.response)
                if (error.response.data.detail === "Incorrect old password") {
                    setFieldErrors({ ...fieldErrors, oldPasswordNotMatch: true })
                }
                if (error.response.data.detail === "Not authenticated") {
                    alert("You must be logged in to change your password")
                }
            })
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
                    <form className="" action="/" method="post">
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
                            {fieldErrors.oldPasswordNotMatch && (
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
