import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

// redux最核心的管理对象模块
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
