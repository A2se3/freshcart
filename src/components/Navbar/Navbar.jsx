import React, { useContext, useState } from 'react'
import logo from './../../assets/freshcart-logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { CounterContext } from '../../Context/CounterContext/CounterContext';
import { userContext } from '../../Context/UserContext/UserContext';
import { CartContext } from '../../Context/CartContext/CartContext';
export default function Navbar() {


  let { counter } = useContext(CounterContext);
  let navigate = useNavigate();

  const { userToken, setUserToken } = useContext(userContext);
  const { numOfCartItems } = useContext(CartContext);
  console.log(numOfCartItems);

  function Logout() {
    localStorage.removeItem("userToken");
    // localStorage.setItem("userToken", null);
    setUserToken(null);
    navigate("/login");
  }



  return (



    <nav className="bg-white border-gray-200 dark:bg-gray-900 py-3">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <Link
          to={'/'}
          className="no-underline flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className="h-8" alt="Flowbite Logo" />

        </Link>
        {counter}

        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:w-3/4 md:flex justify-between" id="navbar-default">


          <ul className="font-medium flex flex-col  md:p-0   bg-gray-50 md:flex-row md:space-x-3 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            {userToken && <>
              <li>
                <Link
                  to={'/'}
                  className=" no-underline block py-2   rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to={'cart'}
                  className=" no-underline  py-2   rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                  Cart
                  <span className="relative">
                    <i className="fa-solid fa-cart-shopping text-green-400 mx-2 text-3xl inline"></i>
                    <span className="absolute -top-4 right-1 text-white bg-black rounded-full w-5 h-5 flex justify-center items-center">
                      {numOfCartItems}
                    </span>
                  </span>
                </Link>

              </li>
            </>
            }
          </ul>

          <ul className="font-medium flex flex-col  md:p-0   bg-gray-50 md:flex-row md:space-x-3 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


            <li>
              <Link
                
                className=" no-underline block py-2   rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                <i className='fa-brands fa-facebook mx-1 icon'></i>
              </Link>
            </li>
            <li>
              <a href="#"
                className=" no-underline block py-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <i className='fa-brands fa-instagram mx-1 icon'></i>
              </a>
            </li>
            <li>
              <a href="#"
                className=" no-underline block py-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <i className='fa-brands fa-twitter mx-1 icon'></i>
              </a>
            </li>
            <li>
              <a href="#"
                className=" no-underline block py-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">

                <i className='fa-brands fa-youtube mx-1 icon'></i>

              </a>
            </li>
            <li>
              <a href="#"
                className=" no-underline block py-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">

                <i className='fa-brands fa-linkedin mx-1 icon'></i>

              </a>
            </li>

            {userToken ?
              <>
                <li>
                  <button
                    onClick={Logout}
                    className=" no-underline block py-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">

                    Logout

                  </button>
                </li>
              </> :
              <>
                <li>
                  <Link
                    to='Login'
                    className=" no-underline block py-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">

                    Login

                  </Link>
                </li>
                <li>
                  <Link
                    to='Register'
                    className=" no-underline block py-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">

                    Register

                  </Link>
                </li>
              </>}
          </ul>
        </div>
      </div>
    </nav>


  )
}
