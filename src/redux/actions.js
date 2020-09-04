import { INCREMENT, DECREMENT } from "./action-types";

// 包含所有的 action creator
export const increment = (num) => ({type: INCREMENT, data: num})

export const decrement = (num) => ({type: DECREMENT, data: num})