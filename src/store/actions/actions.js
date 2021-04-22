import {ADD_TO_CART,REMOVE_PRODUCT, CLEAR_CART} from '../actions/types'

export function addToCart(productInfo, quantity) {
    return {
        type : ADD_TO_CART,
        productInfo, 
        quantity
    }
}

export function removeProduct(index) {
    return {
        type : REMOVE_PRODUCT,
        index, 
    }
}
export function clearCart() {
    return {
        type : CLEAR_CART,
    }
}
