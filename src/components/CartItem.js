import React from 'react'
import {connect} from 'react-redux'
import {removeProduct} from '../store/actions/actions'

function CarttItem (props) {
        const {item, index} = props;
        const {product} = item;
        

        return (
          
                <div className="card" >
                    <img src={product.image} className="card-img-top" alt="Test" />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text"> Price : ${product.price}</p>
                        <p>Quantity : {item.quantity}</p>
                        <p>Total :{product.price * item.quantity} $</p>
                        <button
                         className="btn btn-danger"
                         onClick={()=>props.removeProduct(index)}
                        >
                            Delete <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
                
                
                
        )
}


 function mapDispatchToProps (dispatch) {
    return{
        removeProduct : (index) => dispatch(removeProduct(index))
    }
}

export default connect(null, mapDispatchToProps)(CarttItem) ;