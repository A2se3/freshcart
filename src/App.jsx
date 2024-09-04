import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainlayOut from "./pages/MainlayOut/MainlayOut"
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import CounterContextProvider from './Context/CounterContext/CounterContext';
import UserContextProvider from './Context/UserContext/UserContext';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute';
import ProuductDetails from './pages/ProuductDetails/ProuductDetails';
import { Offline, Online } from "react-detect-offline";
import CartContextProvider from './Context/CartContext/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import Checkout from './pages/CheckOut/Checkout';
import AllOrders from './pages/AllOrders/AllOrders';
import Brands from './components/Brands/Brands';
import Categories from './components/Categories/Categories';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  let query = new QueryClient()
  let x = createBrowserRouter([
    {
      path: "",
      element: <MainlayOut />,
      children: [
        {
          index: true, element: (
            <ProtectedRoute> <Home /></ProtectedRoute>
          ),
        },
        {
          path: "cart", element: (
            <ProtectedRoute> <Cart /></ProtectedRoute>
          ),
        },
        {
          path: "checkout", element: (
            <ProtectedRoute> <Checkout /></ProtectedRoute>
          ),
        },
        {
          path: "brands", element: (
            <ProtectedRoute> <Brands /></ProtectedRoute>
          ),
        },
        {
          path: "categories", element: (
            <ProtectedRoute> <Categories /></ProtectedRoute>
          ),
        },

        {
          path: "allorders", element: (
            <ProtectedRoute> <AllOrders /></ProtectedRoute>
          ),
        },


        {
          path: "prouductdetails/:id", element: (
            <ProtectedRoute> <ProuductDetails /></ProtectedRoute>
          ),
        },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },



        {
          path: '*', element: <NotFound />,
        },
      ]
    },
  ]);

  return (

    <QueryClientProvider client={query}>
      <UserContextProvider>
        <CartContextProvider>
          <Offline>
            <div className='bg-red-300 absolute bottom-1 right-5 z-50 p-7 '>
              Only shown offline
            </div>
          </Offline>
          <Toaster />
          <CounterContextProvider>
            <RouterProvider router={x}></RouterProvider>
          </CounterContextProvider>
        </CartContextProvider>

      </UserContextProvider>


    </QueryClientProvider>

  );
}

export default App





