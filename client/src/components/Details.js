import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import '../styles/details.css';

const Details = (props) => {
    const { deleteProduct } = props;
    const navigate = useNavigate();
    const [ product, setProduct ] = useState({});
    const { id } = useParams(); 

    useEffect(() => {
        axios.get(`http://localhost:5000/api/product/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => console.log(err))
    }, []);

    const deleteAndClear = (productId) => {
        deleteProduct(productId);
        navigate('/');
    }
    return (
        <div>
            <h1>Details</h1>
            <h4>{product.title}</h4>
            <p>Price:  ${product.price}</p>
            <p>Description:  {product.description}</p>
            <button className='btn del' onClick={e => deleteAndClear(product._id)}>Delete</button>
        </div>
    )
}

export default Details;