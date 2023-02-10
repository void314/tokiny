import React, { MouseEventHandler } from 'react'
import BuyProductBtn from '../buy-product-btn/buy-product-btn'
import { IProduct } from '@/models/IProduct'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { addItem } from '@/redux/reducers/cartSlice'

type TProps = {
  data: IProduct
}

export default function Card({data} : TProps): JSX.Element {
  const dispatch = useAppDispatch();

  const hendleAddToCart = () => {
    dispatch(addItem(data))
  }

  return (
    <div className='item flex flex-col items-center justify-around mt-3 bg-gray-200'>
      <img className='item-img' width={150} height={150} src={data.image} />
      <div className='item-content'>
        <span className='item-content__title'>{data.title}</span>
        <b className='item-content__price'>{data.price} руб.</b>
      </div>
      <BuyProductBtn click={ hendleAddToCart } />
    </div>
  )
}
