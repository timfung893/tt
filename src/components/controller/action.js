import { ADD_CART, DECREASE_QTY, REMOVE_ITEM } from "./type"

export const ADD = (item) => {
    return {
        type: ADD_CART,
        payload: item,
    } 
}

export const REMOVE = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id,
    }
}

export const DECREASE = (item) => {
    return {
        type: DECREASE_QTY,
        payload: item,
    }
}