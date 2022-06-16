import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import '../styles/form.css';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5000/api/product/${id}`)
        .then(res => {
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/product/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Edit Menu</h2>
            <form onSubmit={updateProduct}>
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
                <button type="submit">Update</button>
            </form>
        </div>
    )
}
export default Edit;