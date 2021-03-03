import { root } from "postcss"
import { combineReducers } from "redux"
import userReducer from "./user/userReducer"

const rootReducer = combineReducers({
    user: userReducer,
})

export default rootReducer
