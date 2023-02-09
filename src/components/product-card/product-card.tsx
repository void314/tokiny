import React from 'react'
import BuyProductBtn from '../buy-product-btn/buy-product-btn'

interface Product {
  title: string,

  price: number,

  image: string
}

export default function Card({title, price, image} : Product): JSX.Element {
  return (
    <div className='item flex flex-col items-center justify-around mt-3 bg-gray-200'>
      <img className='item-img' width={150} height={150} src={image} />
      <div className='item-content'>
        <span className='item-content__title'>{title}</span>
        <b className='item-content__price'>{price} руб.</b>
      </div>
      <BuyProductBtn/>
    </div>
  )
}
