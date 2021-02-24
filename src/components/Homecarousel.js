import React, { useState, useEffect } from "react"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

const Homecarousel = () => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    let fetchItems = async () => {
        console.log("Fetching items..")
        let response = await fetch(
            `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&editors_choice=true&page=1&per_page=10`
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
        fetchItems()
    }, [])
    return (
        <div>
            <div className="text-4xl font-serif text-gray-800 font-bold mx-28 my-16">
                Top Pictures:
            </div>
            <div>
                {!isLoading && images.length === 0 && (
                    <h1 className="text-4xl text-center mx-auto mt-32 bg-gray-60">
                        No Images Found
                    </h1>
                )}
                {isLoading ? (
                    <h1 className="text-2xl text-center mx-auto mt-32 bg-gray-60">
                        Images loading...
                    </h1>
                ) : (
                    <div className="pb-16">
                        <CarouselProvider
                            naturalSlideWidth={30}
                            naturalSlideHeight={20}
                            totalSlides={10}
                            visibleSlides={4}
                            className="relative"
                        >
                            <Slider>
                                {images.map((image, index) => (
                                    <Slide index={index}>
                                        <img src={image.webformatURL} alt="" className="" />
                                    </Slide>
                                ))}
                            </Slider>
                            <ButtonNext className="absolute top-2/4 right-0 transform -translate-y-2/4 rounded-full h-20 w-20 flex items-center justify-center text-6xl font-black text-gray-900 hover:bg-blue-200">
                                {" "}
                                &gt;{" "}
                            </ButtonNext>
                            <ButtonBack className="absolute top-2/4 left-0 transform -translate-y-2/4 rounded-full h-20 w-20 flex items-center justify-center text-6xl font-black text-gray-900 hover:bg-blue-200">
                                {" "}
                                &lt;{" "}
                            </ButtonBack>
                        </CarouselProvider>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Homecarousel
