import React, { useEffect, useState } from 'react';
import axios from "axios";
import Product from "../Compenents/Product";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios('data.json');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  

  return (
    <div className="flex flex-row flex-wrap justify-around">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Home;

