import React, { useContext } from 'react'
import MainSlider from '../../components/MainSlider/MainSlider';
import CategorySlider from '../../components/CategorySlider/CategorySlider';
import Products from '../../components/Products/Products';

export default function Home(props) {

  return (
    <div className="container">
      <MainSlider />
      <CategorySlider />
      <Products />

    </div>
  );
}
