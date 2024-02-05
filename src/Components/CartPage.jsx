import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const handleOrder = () => {
    favourites.forEach(product => {
      // Remove from favourites in db.json
      fetch(`http://localhost:5000/favourites/${product.id}`, { // Replace with your JSON server URL
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        dispatch({ type: 'REMOVE_FROM_FAVOURITES', payload: product });
  
        // Add to orders in db.json
        fetch('http://localhost:5000/orders', { // Replace with your JSON server URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        })
        .then(response => response.json())
        .then(data => {
          toast("Wow so easy!");
          console.log('Success:', data);
          dispatch({ type: 'ADD_TO_ORDERS', payload: product });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  };
  

  return (
    <div className="flex justify-evenly mt-8">
      <div className="bg-white p-4 drop-shadow-lg">
        <h1 className="text-xl font-bold">My Cart (Favorites)</h1>
        {favourites.map((item) => (
          <div key={item.id} className="p-6">
            <div className="flex">
              <img src={item.image} className="h-28 w-28" alt={item.title} />
            <div className="flex-col mx-6 ">
            <h2>{item.title}</h2>
            <p className='font-semibold'>₹{item.amount}</p>
            <button onClick={() => handleRemoveFromFavourites(item)} className="mt-10 text-red-600">Remove from Favourites</button>
            </div>
            </div>
          </div>
        ))}
         
      </div>
      <div className="flex-col space-y-2 p-4 bg-white h-min drop-shadow-lg">
        <h1 className=" text-xl text-gray-500 font-bold">Price Details</h1>
        <h2>Total Price</h2>
        <p className='font-bold'>₹{totalPrice}</p>
        <button className=" bg-blue-500 rounded-2xl py-1 px-9 text-white" onClick={handleOrder}>Order</button>
      </div>
    </div>
  );
};

export default CartPage;
