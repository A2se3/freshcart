import React, { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function ProductItem({ product }) {
  const { addToCart, setNumOfCartItems } = useContext(CartContext);


  async function addProduct(id) {

    let { data } = await addToCart(id)
    setNumOfCartItems(data.numOfCartItems)

    toast.success(data?.message, {
      position: 'top-right',
    });
  }
  return (
    <div className="w-full md:w-1/3 lg:w-1/6 p-3 inner product relative  ">
      {" "}
      <Link
        to={`ProuductDetails/${product._id}`}
        className=""
        key={product._id}
      >
        <img className="" src={product.imageCover} alt="" />
        <p className="mt-2 text-blue-400">{product.category.name}</p>
        <h6 className="font-bold my-3">{product.title.split(' ').slice(0, 2).join(' ')}</h6>
        <div className="row justify-between">
          <p>{product.price} EGP</p>
          <div className=" text-slate-500">
            <i className="fa-solid fa-star text-yellow-400"></i>
            <span>{product.ratingsAverage}</span>
          </div>
        </div>
      </Link>
      <button onClick={() => {
        addProduct(product.id);
      }}
        className="bg-blue-400 btn left-2 px-2 rounded text-white absolute top-2">
        +
      </button>
    </div>
  );
}
