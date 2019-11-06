
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import todoReducer from "../AddTodo/reducers/index";
import userReducer from "../User/reducers";
import createSagaMiddleware from 'redux-saga';
import rootSaga  from '../User/saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers2 = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
const reducer = combineReducers({todoReducer: todoReducer, userReducer: userReducer})
const store = createStore(reducer,composeEnhancers2(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga);

export default store;
