import React, { useState, useEffect } from "react"
import ImageCard from "./components/ImageCard"
import ImageSearch from "./components/ImageSearch"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import { HashRouter as Router, Route } from "react-router-dom"

function App() {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [term, setTerm] = useState("")

    useEffect(() => {
        fetch(
            `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
        )
            .then((res) => res.json())
            .then((data) => {
                setImages(data.hits)
                setIsLoading(false)
            })
            .catch((err) => console.log(err))
    }, [term])

    return (
        <div>
            <Header />
            <Router>
                <Route
                    path="/"
                    exact
                    render={(props) => (
                        <div className="container mx-auto">
                            <div>
                                <ImageSearch searchText={(text) => setTerm(text)} />

                                {!isLoading && images.length === 0 && (
                                    <h1 className="text-5xl text-center mx-auto mt-32 bg-gray-60">
                                        No Images Found
                                    </h1>
                                )}
                                {isLoading ? (
                                    <h1 className="text-6xl text-center mx-auto mt-32 bg-gray-60">
                                        Images loading...
                                    </h1>
                                ) : (
                                    <div className="grid grid-cols-5 gap-3">
                                        {images.map((image) => (
                                            <ImageCard key={image.id} image={image} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                />
                <Route path="/about" component={About} />
            </Router>
            <Footer />
        </div>
    )
}

export default App
