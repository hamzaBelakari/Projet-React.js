import React from 'react'
import CartItem from './CartItem'
import {connect} from 'react-redux'
import {clearCart} from '../store/actions/actions'

class  Cart extends React.Component {
    payProduct=() => {
        this.props.clearCart()
    }
    render (){
        return (
            <div>
                <h2>Cart </h2>
                <div className="row">
                    {this.props.cartItems.map((item, index) => 
                        <div className="col-3"key={item.product.id}>
                             <CartItem item={item } index={index} />
                        </div>
                        )}
                    
                </div>
                <br/>
                    <h3>Total :{this.props.total} $</h3>
                    <button 
                    onClick={this.payProduct}
                    className="btn btn-primary btn-block"
                    >Pay</button>
            </div>
        )

    }
}
const  mapStateToProps = (state) =>{
    return{
        cartItems : state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price,0)
    }

}
// const  mapDispatchToProps = (dispatch) =>{
//     return{
//         clearCart : () => dispatch(clearCart())
        
//     }

// }

export default connect(mapStateToProps, {clearCart})(Cart);