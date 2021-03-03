import ImageCard from "./ImageCard"

const SearchContainer = ({ images, isLoading }) => {
    return (
        <div>
            <div className="container mx-auto">
                <div>
                    {!isLoading && images.length === 0 ? (
                        <h1 className="text-5xl text-center mx-auto mt-32 bg-gray-60">
                            No Images Found
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
        </div>
    )
}

export default SearchContainer
