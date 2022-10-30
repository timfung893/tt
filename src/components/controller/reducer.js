import { ADD_CART, DECREASE_QTY } from "./type";
import { REMOVE_ITEM } from "./type";

const initialStore = {
    carts: [],
}


export const cartReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_CART:
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.carts[itemIndex].qty += 1
            } else {
                const temp = { ...action.payload, qty: 1}
                return {
                    ...state,
                    carts: [...state.carts, temp],
                }
            }
        case REMOVE_ITEM:
            const data = state.carts.filter((el) => el.id !== action.payload)
            return {
                ...state,
                carts: data
            }
            
        case DECREASE_QTY:
            const itemIndexDecrease = state.carts.findIndex((item) => item.id === action.payload.id)
            if (state.carts[itemIndexDecrease].qty > 1) {
                const tobeDelItem = (state.carts[itemIndexDecrease] -= 1)
                console.log([...state.carts, tobeDelItem])

                return {
                    ...state,
                    carts: [...state.carts]  
                }
            } else if (state.carts[itemIndexDecrease].qty === 1) {
                const decreasedData = state.carts.filter((el) => el.id !== action.payload.id)
                return {
                    ...state,
                    carts: decreasedData
                }
            } 
        default:
            return state
    }
}