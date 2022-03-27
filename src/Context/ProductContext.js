import React, { createContext, useContext, useState } from "react";


export const ProductContext = createContext();
export const useProduct = () => useContext(ProductContext);

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const value = {products, setProducts};

  return (
    <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
