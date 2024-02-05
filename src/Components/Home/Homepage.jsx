import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Homepage = () => {
  const navigate=useNavigate();
  const products = useSelector((state) => state.products);
  const [favourite, setFavourite] = useState({}); 

  const handleAddToFavourites = (e, product) => {
    e.preventDefault(); 
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

  const handleAddToCart = (e, product) => {
    navigate('/cart')
    e.preventDefault(); 
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


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border bg-white border-gray-300 p-4 rounded-lg"
        >
          <Link to={`/product/${product.id}`}>
            <img
              className="w-full h-64 rounded-md object-cover mb-4"
              src={product.image}
              alt={product.title}
            />
            <h2 className="text-xl text-gray-700 font-bold mb-2">
              {product.title}
            </h2>
          </Link>
          <p className="text-gray-900 font-bold">₹{product.amount}</p>
          <p className="bg-green-600 px-1.5 text-white rounded-md w-min">4.0</p>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={(event) => handleAddToFavourites(event, product)}
              className={`px-3 py-2 rounded-md ${
                favourite[product.id]
                  ? "bg-red-500 text-white"
                  : "text-blue-500"
              }`}
            >
              ❤️
            </button>
            <button
              className="px-3 py-2 text-white rounded-md"
              onClick={(event) => handleAddToCart(event, product)}
            >
              <ion-icon
                name="cart-outline"
                size="large"
                class="text-black hover:text-blue-500 transition"
              ></ion-icon>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
