import { ADD_TO_CART, REMOVE_PRODUCT ,CLEAR_CART} from "../actions/types";

export default function cartReducer(state, action){
    
        switch (action.type) {
            case ADD_TO_CART : {
                return {
                    cart: [
                        ...state.cart,
                        {
                            product: action.productInfo,
                            quantity: action.quantity
                        }
                    ]
                }
            }
            case REMOVE_PRODUCT : {
                const item_index = action.index;
                const new_state = {...state};
                delete new_state.cart[item_index];
                return new_state
            }
            case CLEAR_CART : {
                return {
                    cart: []
                }
            }
            default:
                return state;

        } 
} 