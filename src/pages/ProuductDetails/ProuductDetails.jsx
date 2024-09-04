import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import { CartContext } from '../../Context/CartContext/CartContext';
import toast from 'react-hot-toast';
export default function ProuductDetails() {
  let { id } = useParams()
  const { addToCart, setNumOfCartItems } = useContext(CartContext)
  
  async function addProduct(id) {
    let { data } = await addToCart(id);
    setNumOfCartItems(data.numOfCartItems)

    toast.success(data?.message, {
      position: 'top-right',
    });
  }



  const [details, setDetails] = useState({});


  function getDetails() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((data) => setDetails(data.data.data))
      .catch((err) => console.error(err));

  }

  useEffect(() => {
    getDetails();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplayspeed: 2000
  };



  return (
    <div className="container">
      <Helmet>
        <title>{details.title}</title>
      </Helmet>


      <div className="row items-center mt-10">
        <div className="w-1/4 ">
          <Slider {...settings}>

            {details?.images?.map(image =>
              <img src={image} alt="" className='h-64 w-full object-contain' />

            )}

          </Slider>

        </div>
        <div className="w-3/4  px-4">
          <div className="inner">
            <h1 className="text-3xl">{details.title}</h1>
            <small className='text-slate-500'>{details.description}</small>
            <p> {details?.category?.name} </p>
            <div className=" flex justify-between">
              <p>{details.price}</p>
              <div>{details.ratingsAverage}
                <i className='fa-solid fa-star text-yellow-400'></i>
              </div>
            </div>
            <button onClick={() => { addProduct(id) }} className="bg-blue-400 w-full p-2 rounded mt-3 text-white">Add To CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}
