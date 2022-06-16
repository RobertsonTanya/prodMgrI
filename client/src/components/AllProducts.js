import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles/allproducts.css';


const AllProducts = (props) => {
    const { deleteProduct, products, setProducts } = props;

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then((response) => {
                setProducts(response.data)
            })
            .catch((err) => console.log(err))
    }, [])


    return (
        <div>
            <h1>All Products</h1>
            
            {products ? products.map((product, index) => {
                return (
                <div key={index}>
                    <Link to={`/product/${product._id}`}><h4>{product.title}</h4></Link>
                    <Link className='btn edit' to={`/product/edit/${product._id}`}>Edit</Link>
                    <button className='btn del' onClick={e => deleteProduct(product._id)}>Delete</button>
                </div>
                )
            }) : null}
        </div>
    )
}

export default AllProducts;