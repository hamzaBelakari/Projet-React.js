import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class CartIcon extends Component {
    render() {
        return (
            <div id="cartIcon">
                <Link to='/cart'>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="badge badge-danger">{this.props.totalQuantity}</span>
                </Link>
            </div>
        )
    }
}

const  mapToProps = (state) =>{
    return{
        totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity),0)
    }

}

export default connect(mapToProps)(CartIcon) ;
