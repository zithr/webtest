import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="container mx-auto">   
            <h4>Images from PixaBay!</h4>
            <Link to='/' className="text-blue-700 hover:underline">Go Back</Link>
        </div>
    )
}

export default About
