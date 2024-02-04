import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.find((product) => product.id === id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex bg-white py-8 gap">
      <img src={product.image} alt={product.title} />

      <div >
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p>{product.description}</p>
        <p className="text-3xl font-bold">₹{product.amount}</p>
        <div className="mt-56 flex justify-between mx-8 ">
          <button className="border-black border-2 p-6">Buy Now</button>
          <button className="bg-black text-white p-6">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
