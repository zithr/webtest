const News = () => {
    return (
        <div>
            <div className="bg-blue-300 h-screen font-serif">
                <div className="container mx-auto">
                    <div className="h2 text-3xl pt-6 font-bold">News</div>
                    <div className="flex">
                        <div className="text-lg">There is no new news.</div>
                        <img
                            className="-mt-5 ml-2"
                            src="https://cdn.betterttv.net/emote/5f06a4bd73e8e20538d7a4b0/2x"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
