import React, { useState } from 'react';
import axios from 'axios';

import '../styles/form.css';

const Form = (props) => {
    const { products, setProducts } = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const createNewProduct = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/product', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res.data);
                setProducts([...products, res.data])
                setTitle('');
                setPrice('');
                setDescription('');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Product Manager</h2>
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
        </div>
    )
}

export default Form;