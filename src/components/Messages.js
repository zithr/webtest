const Messages = () => {
    return (
        <div>
            <div className="bg-blue-300 min-h-screen font-serif">
                <div className="container mx-auto">
                    <div className="h2 text-3xl py-6 font-bold">Your messages</div>
                    <div className="flex">
                        <div className="text-lg">You have no new messages.</div>
                        <img
                            className="-mt-8 ml-2"
                            src="https://cdn.betterttv.net/emote/59f27b3f4ebd8047f54dee29/2x"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages
