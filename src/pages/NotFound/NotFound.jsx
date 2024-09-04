import React from 'react';
import style from './NotFound.module.css'
import notfound from './../../assets/not-found-404.jpg';
export default function NotFound() {
  return (
    <div className='flex justify-center '>
      <img src={notfound} alt="" />

    </div>

  );
}
