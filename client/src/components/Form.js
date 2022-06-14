import React, { useState } from 'react';
import axios from 'axios';


const Form = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [products, setProducts] = useState([]);

    const createNewProduct = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/product', {
            title,
            price,
            description
        })
            .then(response => {
                console.log(response.data)
                setTitle('');
                setPrice('');
                setDescription('');
            })
            .catch(err => console.log(err));
    }
    const getProducts = () => {
        axios.get('http://localhost:5000/api/products')
            .then((response) => {
                setProducts(response.data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>Product Form</h1>
            <form onSubmit={createNewProduct}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" value={title} type="text" onChange={e=>setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input id="price" value={price} type="number" onChange={e=>setPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="descr">Description</label>
                    <input id="descr" value={description} type="text" onChange={e=>setDescription(e.target.value)} />
                </div>
                <button type="submit">Create</button>
            </form>

            <button onClick={getProducts}>Get All Products</button>
            {products ? products.map((product, index) => {
                return (
                    <div>
                        <h4>{product.title}</h4>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                    </div>
                )
            }) : null}
        </div>
    )
}

export default Form;