import React, { useState, useEffect } from "react"
import { Provider } from "react-redux"
import { BottomScrollListener } from "react-bottom-scroll-listener"
import ImageCard from "./components/ImageCard"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import CreateAccount from "./components/CreateAccount"
import YourAccount from "./components/YourAccount"
import Privacy from "./components/Privacy"
import News from "./components/News"
import Help from "./components/Help"
import Shop from "./components/Shop"
import Messages from "./components/Messages"
import AddItem from "./components/AddItem"
import Homecarousel from "./components/Homecarousel"
import UserTest from "./components/UserTest"
import ChangePassword from "./components/ChangePassword"
import users from "./db.json"
import { HashRouter as Router, Route } from "react-router-dom"
import store from "./redux/store"
import SearchContainer from "./components/SearchContainer"

function App() {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [term, setTerm] = useState("")
    const [logged, setLogged] = useState(false)
    const [username, setUsername] = useState("")
    const atBottom = () => {
        setPage(page + 1)
    }
    const [page, setPage] = useState(1)
    let fetchItems = async (fetchPage) => {
        let response = await fetch(
            `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&safesearch=true&pretty=true&page=${fetchPage}`
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
        setIsLoading(true)
        if (page === 1) {
            fetchItems(page)
        } else {
            setPage(1)
        }
    }, [term])

    useEffect(() => {
        setIsLoading(true)
        fetchItems(page)
    }, [page])

    return (
        <Provider store={store}>
            <div className="flex flex-col min-h-screen bg-white">
                <Router>
                    <Header
                        setTerm={setTerm}
                        setImages={setImages}
                        checklogged={logged}
                        username={username}
                        logout={() => setLogged(false)}
                    />

                    <Route path="/search">
                        <SearchContainer images={images} isLoading={isLoading} />
                        {page > 1 && isLoading && (
                            <div className="text-3xl text-center mx-auto bg-gray-60">
                                Images loading...
                            </div>
                        )}
                    </Route>
                    <Route path="/" exact component={Home} />
                    <Route path="/" exact component={Homecarousel} />
                    <Route path="/about" component={About} />
                    <Route path="/login">
                        <Login auth={(x) => setLogged(x)} uname={(y) => setUsername(y)} />
                    </Route>
                    <Route path="/create" component={CreateAccount} />
                    <Route path="/account" component={YourAccount} />
                    <Route path="/privacy" component={Privacy} />
                    <Route path="/news" component={News} />
                    <Route path="/help" component={Help} />
                    <Route path="/yourshop" component={Shop} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/add" component={AddItem} />
                    <Route path="/users" component={UserTest} />
                    <Route path="/changepassword" component={ChangePassword} />
                    <Footer />
                </Router>
                <BottomScrollListener onBottom={atBottom} />
            </div>
        </Provider>
    )
}

export default App
