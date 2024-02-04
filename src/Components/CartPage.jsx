import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CartPage = () => {
  const favourites = useSelector(state => state.favourites);
  const dispatch = useDispatch();

  // Calculate the total price
  const totalPrice = favourites.reduce((total, item) => total + Number(item.amount), 0);

  const handleRemoveFromFavourites = (product) => {
    fetch(`http://localhost:5000/favourites/${product.id}`, { // Replace with your JSON server URL
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({ type: 'REMOVE_FROM_FAVOURITES', payload: product });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };


  return (
    <div className="flex justify-evenly mt-8">
      <div className="bg-white p-4">
        <h1 className="text-xl font-bold">My Cart (Favorites)</h1>
        {favourites.map((item) => (
          <div key={item.id} className="p-6">
            <div className="flex">
              <img src={item.image} className="h-28 w-28" alt={item.title} />
            <div className="flex-col justify-evenly">
            <h2>{item.title}</h2>
            <p>₹{item.amount}</p>
            <button onClick={() => handleRemoveFromFavourites(item)} className="hover:text-red-600 transition">Remove from Favourites</button>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" p-4 bg-white h-min">
        <h1 className="text-xl text-gray-500 font-bold">Price Details</h1>
        <h2>Total Price</h2>
        <p>₹{totalPrice}</p>
      </div>
    </div>
  );
};

export default CartPage;
