import React from 'react'
import ProductItem from './ProductItem'
import {getAll as getAllProducts} from '../Api/products'

class  Products extends React.Component {
    state = {
        products : [],
    }
    componentDidMount(){
        getAllProducts()
            .then(resp => {this.setState({products : resp })
            })
            
    }
    render (){
        return (
            <div>
                <h2>Products </h2>
                <div className="row">
                    {this.state.products.map(product => 
                        <div className="col-3"key={product.id}>
                             <ProductItem product={product } />
                        </div>
                        )}
                    
                </div>
            </div>
        )

    }
    
}

export default Products;