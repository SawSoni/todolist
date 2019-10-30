
import { createStore, combineReducers } from "redux";
import todoReducer from "../reducers/index";
import userReducer from "../../Containers/User/reducers"

// var composeEnhancers = window._REDUX_DEVTOOL_EXTENTION_COMPOSE_ || compose
const reducer = combineReducers({todoReducer: todoReducer, userReducer: userReducer})
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
