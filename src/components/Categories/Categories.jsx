import React, { useEffect, useState } from "react";
import style from "./Categories.module.css";
import axios from "axios";
import { Link } from "react-router-dom";




export default function Categories() {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [data, setProducts] = useState([]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };





async function getCategories() {
  try {
    const response = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
    setProducts(response.data.data); 
  } catch (error) {
    console.error("Error fetching brands:", error);
  }
}


  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
 <div className="container">
      <div className="row mt-10">
        {data.map((product) => (
          <div className="inner w-1/4 px-2 mb-10 cursor-pointer" key={product._id}>
            <div className={`${style.productCard}`}>
              <div onClick={() => handleCardClick(product)}>
                <div className={style.logoCart}>
                  <i className="bx bx-shopping-bag" />
                </div>
                <div className={`${style.mainImages} `}>
                  <img src={product.image} alt="Product Image" className="h-[350px] w-full " />
                </div>
                <div className={`${style.shoeDetails} mt-3 px-3`}>
                  <span className={style.shoeName}>{product.name}</span>
                </div>
                <div className={style.price}></div>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className={style.modal} onClick={handleCloseModal}>
          <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt="Selected Product" className={style.modalImage} />
          </div>
        </div>
      )}
    </div>
    </>
  );
}
