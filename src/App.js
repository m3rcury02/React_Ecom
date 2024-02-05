import Login from "./Components/Login/Login";
import Header from './Components/Header';
import { Route, Routes } from "react-router";
import Register from "./Components/Login/Register";
import Homepage from "./Components/Home/Homepage";
import ProductPage from "./Components/ProductPage";
import CartPage from "./Components/CartPage";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="bg-sky-100 h-screen">
      <div className="sticky top-0 z-10"><Header/></div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/> 
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
