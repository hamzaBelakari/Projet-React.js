import Products from './products.json'

export function getAll(){
    return  Promise.resolve(Products);
}

export function getById(id){
    const Product = Products.find(product => product.id === id)
    return  Promise.resolve(Product);
}