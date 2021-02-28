import { Link } from "react-router-dom"

const About = () => {
    return (
        <div className="bg-blue-300 min-h-screen">
            <div className="container mx-auto font-serif">
                <div className="h2 text-3xl pt-6 font-bold">About</div>
                <div className="text-lg">Images used are from PixaBay and Unsplash.</div>
                <div className="text-lg">
                    Site created using GitHub Actions, React and TailwindCSS.
                </div>
                <img
                    src="https://images.unsplash.com/photo-1515838886508-13050576a593?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
                    alt=""
                    className="rounded-xl shadow-lg mt-6"
                />
            </div>
        </div>
    )
}

export default About
