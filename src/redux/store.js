import { createStore } from "redux"
import { counter } from "./reducers"

const store = createStore(counter)  // 内部第一次调用reducer函数得到初始state

export default store