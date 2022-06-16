import React, { useState } from 'react';
import Form from '../components/Form';
import AllProducts from '../components/AllProducts';


const Main = () => {
    const [products, setProducts] = useState([]);

    return (
        <div>
            <Form products={products} setProducts={setProducts} />
            <hr />
            <AllProducts products={products} setProducts={setProducts}  />
        </div>
    )
}

export default Main;