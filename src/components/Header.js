const Header = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-800 p-6">
            <div className="flex">
                <div className="mr-6">
                    <div className="text-white font-bold text-xl">hub</div>
                </div>

                <button className="self-end text-sm text-blue-300 hover:text-white mr-4">
                    Your Account
                </button>
            </div>
            <div className="text-sm sm:flex-row-reverse">
                <button className="text-blue-300 hover:text-white mr-4">Sign Out</button>
            </div>
        </nav>
    )
}

export default Header
