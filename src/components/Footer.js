import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="flex bg-gray-800 p-6">
                <div className="text-sm">
                    <Link to ='/about' className=" text-blue-300 hover:text-white mr-4">About</Link>
                </div>
                <div className="text-sm">
                    <button className="block mt-4 sm:inline-block sm:mt-0 text-blue-300 hover:text-white mr-4">News</button>
                </div>
                <div className="text-sm">
                    <button className="block mt-4 sm:inline-block sm:mt-0 text-blue-300 hover:text-white mr-4">Privacy</button>
                </div>
                <div className="text-sm">
                    <button className="block mt-4 sm:inline-block sm:mt-0 text-blue-300 hover:text-white mr-4">Help</button>
                </div>
                
            <div className="block flex-row-reverse sm:flex sm:items-center sm:w-auto">
                <div className="text-sm sm:flex-row-reverse">
                    <span className="block mt-4 sm:inline-block sm:mt-0 text-blue-300 hover:text-white mr-4">Copyright &copy; 2021</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
