import React, { useState, useEffect, createContext } from 'react'


// API
import { getProducts } from '../services/api';

export const ProductContext = createContext();

const ProductsContextProvider = ({ children }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const feachApi = async () => {
      setProducts(await getProducts());
    }
    feachApi();
  }, []);



  return (
    <div>
      <ProductContext.Provider value={products}>
        {children}
      </ProductContext.Provider>
    </div>
  )
}

export default ProductsContextProvider;