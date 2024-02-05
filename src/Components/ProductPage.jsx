import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ProductPage = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const [favourite, setFavourite] = useState({});
  const handleAddToFavourites = (event, product) => {
    event.preventDefault(); 
    fetch("http://localhost:5000/favourites", {
  
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setFavourite({ ...favourite, [product.id]: true }); 
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.find((product) => product.id === id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex bg-white py-8 px-8 gap  justify-center">
      <img src={product.image} alt={product.title} className="w-1/3 h-1/2 " />

      <div className="mx-8 w-1/2 h-1/2">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p>{product.description}</p>
        <p className="text-3xl font-bold">₹{product.amount}</p>
        <div className="mt-56 flex justify-between ">
          <button
            onClick={(event) => handleAddToFavourites(event, product)}
            className="border-black border-2 p-6 hover:bg-black hover:text-white transition"
          >
            Buy Now
          </button>
          <button
            onClick={(event) => handleAddToFavourites(event, product)}
            className="bg-black text-white p-6 hover:bg-white hover:text-black hover:border-2 hover:border-black transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
