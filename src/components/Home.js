const Home = () => {
    return (
        <div className="">
            <div className=" mx-auto bg-blue-50">
                <div className="flex justify-around items-center">
                    <div className="text-gray-800 font-serif justify-center">
                        <div className="text-3xl font-black">Support Local Photographers</div>
                        <div className="text-lg font-medium">Rediscover old favourites</div>
                    </div>
                    <div className="rounded overflow-hidden shaddow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2h8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="h-full max-w-sm max-h-1/5"
                        />
                    </div>
                </div>
            </div>
            <div className=" mx-auto mt-4">
                {" "}
                {/*colour taken from bg image currently*/}
                <div
                    className="flex justify-around items-center"
                    style={{
                        backgroundImage: `url("https://images.unsplash.com/photo-1504198266287-1659872e6590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
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
                            src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
