import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Main from './views/Main';
import Details from './components/Details';
import Edit from './components/Edit';

import './styles/App.css';

function App() {
  const [products, setProducts] = useState([]);

  const deleteProduct = (productId) => {
      axios.delete(`http://localhost:5000/api/product/${productId}`)
          .then(res => {
              setProducts(products.filter(product => product._id != productId));
          })
          .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route element={<Main products={products} setProducts={setProducts} deleteProduct={deleteProduct} />} path="/" default />
              <Route element={<Details deleteProduct={deleteProduct} />} path="/product/:id"  />
              <Route element={<Edit />} path="/product/edit/:id"  />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
