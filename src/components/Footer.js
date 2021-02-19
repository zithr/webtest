import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="sticky bottom-0 flex justify-between bg-gray-800 p-2 text-sm">
            <div className="flex">
                <Link to="/about" className="text-blue-300 hover:text-white mr-4">
                    About
                </Link>
                <button className="text-blue-300 hover:text-white mr-4">News</button>
                <button className="text-blue-300 hover:text-white mr-4">Privacy</button>
                <button className="text-blue-300 hover:text-white mr-4">Help</button>
            </div>

            <div className="text-blue-300 hover:text-white mr-4">Copyright &copy; 2021</div>
        </footer>
    )
}

export default Footer
