import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <nav class="bg-blue-500 shadow ">
        <div class="container mx-auto px-6 py-2 ">
            <div class="md:flex md:items-center md:justify-between">
                <div class="flex justify-between items-center">
                    <div class="text-xl font-semibold">
                        <a href="/home" class="text-white text-3xl font-bold md:text-2xl">ShopKart.</a>
                    </div>

                
                    <div class="flex md:hidden">
                        <button type="button" class="text-white" aria-label="toggle menu">

                        </button>
                    </div>
                </div>

                <div class="hidden -mx-4 md:flex md:items-center">
                    <a href="#" class="block mx-4 mt-2 md:mt-0 text-sm text-white capitalize ">Products
                    </a>
                    <a href="/" class="block mx-4 mt-2 md:mt-0 text-sm text-white capitalize ">Login/Logout</a>
                    <Link to="/cart" class="block mx-4 mt-2 md:mt-0 text-sm"><ion-icon name="cart-outline" size="large" class="text-black hover:text-white transition"></ion-icon></Link>
                    
                </div>
            </div>
        </div>
    </nav>


</header>
  )
}

export default Header