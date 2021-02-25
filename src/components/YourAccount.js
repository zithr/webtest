import { Link } from "react-router-dom"

const YourAccount = () => {
    return (
        <div className="bg-blue-100 h-screen">
            <div className="container mx-auto font-serif">
                <div className="h2 pt-2 text-3xl font-bold">Your Account Page</div>
                <Link
                    to="./yourshop"
                    className="mt-6 text-base text-blue-400 underline cursor-pointer focus:no-underline focus:text-blue-800 focus:outline-none"
                >
                    Manage your shop
                </Link>
                <div className="mt-6 flex mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1530842128367-9e448d986a75?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRzaG90fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        className="max-h-40"
                    />
                    <div className="ml-6">
                        <div className="h3 text-2xl font-medium">Your Details</div>
                        <div className="grid grid-cols-2">
                            <div className="div">First Name:</div>
                            <div className="div">Emma</div>
                            <div className="div">Second Name:</div>
                            <div className="div">Thomas</div>
                            <div className="div">Email Address:</div>
                            <div className="div">emma@tester.com</div>
                            <div className="div">Other:</div>
                            <div className="div">yes</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourAccount
