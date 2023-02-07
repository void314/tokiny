import React from 'react'
import BuyProductBtn from '../buy-product-btn/buy-product-btn'

export default function Card() {
  return (
    <div className='item flex flex-col items-center justify-around mt-3 bg-gray-200'>
      <img className='item-img' width={250} height={250} src='./testimg.jpg'/>
      <div className='item-content'>
        <span className='item-content__title'>LOVE IS 💓</span>
        <b className='item-content__price'>52.90 руб.</b>
      </div>
      <BuyProductBtn/>
    </div>
  )
}
