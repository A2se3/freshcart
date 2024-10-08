import React, { useEffect, useState } from "react";
import style from "./Brands.module.css";
import axios from "axios";

export default function Brands() {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [data, setProducts] = useState([]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };



  async function getBrands() {
    try {
      const response = await axios.get("https://ecommerce.routemisr.com/api/v1/brands");
      setProducts(response.data.data); 
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  }




  useEffect(() => {
    getBrands();
  }, []);
  return (
    <>
 <div className="container">
      <div className="row mt-10">
        {data?.map((product) => (
          <div className="inner w-1/6 px-2 mb-4 cursor-pointer" key={product._id}>
            <div className={`${style.productCard}`}>
              <div onClick={() => handleCardClick(product)}>
                <div className={style.logoCart}>
                  <i className="bx bx-shopping-bag" />
                </div>
                <div className={style.mainImages}>
                  <img src={product.image} alt="Product Image" />
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
