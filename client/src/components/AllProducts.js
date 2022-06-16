import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles/allproducts.css';


const AllProducts = (props) => {
    const { products, setProducts } = props;

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
                return <Link key={index} to={`/product/${product._id}`}><h4>{product.title}</h4></Link>
            }) : null}
        </div>
    )
}

export default AllProducts;