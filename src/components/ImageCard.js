import React from "react"

const ImageCard = ({ image }) => {
    const tags = image.tags.split(",")

    return (
        <div className="max-w-sm pt-2 rounded overflow-hidden shadow-lg bg-gray-100">
            <img
                src={image.webformatURL}
                alt=""
                className="flex object-cover max-w-96 h-72 justify-center w-full"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">Photo by {image.user}</div>
                <ul>
                    <li>
                        <strong>Location: </strong>
                        Somewhere
                    </li>
                    <li>
                        <strong>Favourites: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semi text-gray-700 mr-3"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default ImageCard
