import React, { useState, useEffect } from "react"
import { BottomScrollListener } from "react-bottom-scroll-listener"
import ImageCard from "./components/ImageCard"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import CreateAccount from "./components/CreateAccount"
import Homecarousel from "./components/Homecarousel"
import { HashRouter as Router, Route } from "react-router-dom"

function App() {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [term, setTerm] = useState("")
    const atBottom = () => {
        setPage(page + 1)
    }
    const [page, setPage] = useState(1)
    let fetchItems = async (fetchPage) => {
        let response = await fetch(
            `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&page=${fetchPage}`
        )
        if (response.ok) {
            let data = await response.json()
            setImages([...images, ...data.hits])
            setIsLoading(false)
        } else {
            console.log(response.status)
        }
    }
    useEffect(() => {
        if (page === 1) {
            fetchItems(page)
        } else {
            setPage(1)
        }
    }, [term])

    useEffect(() => {
        fetchItems(page)
    }, [page])

    return (
        <div>
            <Router>
                <Header setTerm={setTerm} setImages={setImages} />

                <Route
                    path="/search"
                    render={(props) => (
                        <>
                            <div className="container mx-auto">
                                <div>
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
                                        <div className="grid grid-cols-4 gap-3">
                                            {images.map((image) => (
                                                <ImageCard key={image.id} image={image} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                />
                <Route path="/" exact component={Home} />
                <Route path="/" exact component={Homecarousel} />
                <Route path="/about" component={About} />
                <Route path="/create" component={CreateAccount} />
                <Footer />
            </Router>
            <BottomScrollListener onBottom={atBottom} />
        </div>
    )
}

export default App
