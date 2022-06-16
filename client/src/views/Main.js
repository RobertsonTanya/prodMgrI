import React from 'react';
import Form from '../components/Form';
import AllProducts from '../components/AllProducts';


const Main = (props) => {
    const { products, setProducts, deleteProduct } = props;

    return (
        <div>
            <Form products={products} setProducts={setProducts} />
            <hr />
            <AllProducts products={products} setProducts={setProducts} deleteProduct={deleteProduct}  />
        </div>
    )
}

export default Main;