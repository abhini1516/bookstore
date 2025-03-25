import { href, Link } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";

import avatarImg from "../assets/avatar.png"
import { useState } from "react";

const navigation =[
  {name:"Dashboard",href:"/dashboard"},
  {name:"Orders",href:"/orders"},
  {name:"Cart Page",href:"/cart page"},
  {name:"Sign Out",href:"/sign out"},

]


// filepath: /c:/Users/ananya/bookstore/frontend/src/components/Navbar.jsx
const Navbar = () => {
  const [isDropdownOpen,setIsDropdownOpen]=useState(false)
  console.log(isDropdownOpen)
  const currentUser=true;
    return (
      <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          {/*left side*/}
          <div className="flex items -center md:gap-16 gap-4">
            <Link to="/">
            <HiBars3BottomLeft className="size-6"/>
            
            </Link>

            {/*search input*/}
            <div className="relative sm:w-72 w-40 space -x-2">
            <IoMdSearch className="absolute inline-block left-3 inset-y-2 "/>
            <input type="text" placeholder="Search here" 
            className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md 
            focus:outline-none"/>

            </div>
          </div>


          {/*right side*/}
          <div className="relative flex items-center md:space-x-3 space-x-2">
            <div>
              {
                currentUser ? <>
                <button onClick ={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ?'ring-2 ring-blue-500' : ''}`} />
                </button>
                {/*show dropdowns*/}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {
                        navigation.map((item)=> (
                          <li key={item.name}onClick={( )=>setIsDropdownOpen(false)}>
                            <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                            {item.name}
                            </Link>
                          </li>
                        ) )
                      }
                    </ul>
                  </div>
                )}
                </> : <Link to="/login"><FaCircleUser className="size-6" /></Link>
              }
            </div>
          
          <button className="hidden sm:block">
          <FaRegHeart className="size-6" />
          </button>

          <Link to ="/cart" className="bg-primary p-1 sm:px-6 px-2 flex item center rounded-sm">
          <GiShoppingCart className="size-6"/>
          <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
          </div>
        </nav>
      </header>
      
    );
  };
  
  export default Navbar;