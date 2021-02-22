const Home = () => {
    return (
        <div className="">
            <div className=" mx-auto bg-blue-300">
                <div className="flex justify-around items-center">
                    <div className="text-gray-800 font-serif justify-center">
                        <div className="text-3xl font-black">Support Local Photographers</div>
                        <div className="text-lg font-medium">Rediscover old favourites</div>
                    </div>
                    <div className="rounded overflow-hidden shaddow-lg">
                        <img
                            src="https://source.unsplash.com/random"
                            alt=""
                            className="h-full max-w-sm max-h-1/5"
                        />
                    </div>
                </div>
            </div>
            <div className=" mx-auto bg-indigo-100">
                <div className="flex justify-around items-center">
                    <div className="text-gray-800 font-serif">
                        <div className="text-3xl font-black">What is this place?</div>
                        <div className="max-w-md text-lg font-medium">
                            Alice was beginning to get very tired of sitting by her sister on the
                            bank, and of having nothing to do: once or twice she had peeped into the
                            book her sister was reading, but it had no pictures or conversations in
                            it, 'and what is the use of a book,' thought Alice 'without pictures or
                            conversation?'
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shaddow-lg">
                        <img
                            src="https://source.unsplash.com/random"
                            alt=""
                            className="max-h-1/5"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
