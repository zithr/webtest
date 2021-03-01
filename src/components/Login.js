import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className="flex flex-1 items-center"
        >
            <div className="bg-white h-112 w-96 rounded-xl ml-32 -mt-32 shadow-lg">
                <div className="container w-10/12 m-auto">
                    <div className="text-gray-800 font-semibold text-2xl pt-12 italic">hub</div>
                    <div className="text-gray-800 font-semibold text-xl pt-10">Log in</div>
                    <div className="text-gray-600">Continue to your store</div>
                    <div className="flex flex-row-reverse mt-9">
                        <Link
                            to="/help"
                            className="text-right text-purple-400 font-medium text-xs hover:text-purple-600"
                        >
                            Forgot username?
                        </Link>
                    </div>
                    <input
                        className="mt-1 p-1 block w-full h-12 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                        type="text"
                        placeholder="Email address"
                    />
                    <button className="mt-4 w-20 h-12 bg-purple-400 rounded-lg shadow-md text-white font-semibold hover:bg-purple-500">
                        Next
                    </button>
                    <div className="text-sm mt-4">
                        <span className="">New to Hub?</span>
                        <Link to="/create" className="text-purple-400 ml-1 hover:text-purple-600">
                            Get started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
