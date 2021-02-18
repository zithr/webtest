const Header = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-bold text-xl">hub</span>
            </div>

            <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
                <div className="text-sm sm:flex-grow">
                    <button className="block mt-4 sm:inline-block sm:mt-0 text-blue-300 hover:text-white mr-4">Your Account</button>
                </div>
            </div>
            <div className="block flex-row-reverse sm:flex sm:items-center sm:w-auto">
                <div className="text-sm sm:flex-row-reverse">
                    <button className="block mt-4 sm:inline-block sm:mt-0 text-blue-300 hover:text-white mr-4">Sign Out</button>
                </div>
            </div>
            
        </nav>
    )
}

export default Header
