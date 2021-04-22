import React, { Component } from 'react'
import {getById} from '../Api/products'
import {addToCart} from '../store/actions/actions'
import {connect} from 'react-redux'
class Product extends Component {
    state = {
        loading : true,
        product : {},
        quantity :0
    }
    componentDidMount(){
        const id = parseInt(this.props.match.params.id);

        getById(id)
        .then(product => {
                this.setState({
                    product,
                    loading : false,
                });
        }) 
    }

    handleQuantity = (e) => {
        this.setState({
            quantity : e.target.value
        })
    }

    addToCart=()=> {
        this.props.addToCart(this.state.product, this.state.quantity)
    }
    
    render() {
        if(this.state.loading)
            return 'Loading ...';
            
        return (
            <div>
               <div className="row">
                   <div className="col-6">
                       <img src={this.state.product.image} width="100%" />
                   </div>
                   <div className="col-6">
                        <h1>{this.state.product.name} </h1>  
                        <p> Price : {this.state.product.price}$</p> 
                        <p>{this.state.product.description}</p> 
                        <input 
                            onChange={this.handleQuantity}
                            type="number" min="0" 
                            value={this.state.quantity} 
                        />
                        <br/><br/>
                        {this.state.quantity > 0 ? (<p> Total : {this.state.quantity * this.state.product.price} $</p>) : null}
                        <button 
                        className="btn btn-primary"
                        onClick={(product)=> this.addToCart(product)}
                        >
                            Add to Cart
                        </button>

                   </div>
               </div>
            </div>
        )
    }
}

const  mapDispatchToProps = (dispatch) =>{
    return{
        addToCart : (productInfo, quantity) => dispatch(addToCart(productInfo, quantity))
    }
}

export default connect(null, mapDispatchToProps)(Product);