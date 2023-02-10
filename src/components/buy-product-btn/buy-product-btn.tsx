import React from 'react'

export default function BuyProductBtn({click}: any) {
  return (
    <button onClick={ click } className='buy-product-btn bg-slate-600 rounded-xl p-2'>Buy</button>
  )
}
