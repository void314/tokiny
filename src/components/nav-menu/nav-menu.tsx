import Link from 'next/link'
import React from 'react'

export default function NavMenu() {
  return (

    <nav>
      <ul className='flex items-center content-between'>
        <li className='m-8'>
          <Link href='/menu'>Меню</Link>
        </li>
        <li className='m-8'>
          <Link href='/stock'>Акции</Link>
        </li>
        <li className='m-8'>
          <Link href='/delivery'>Доставка</Link>
        </li>
        <li className='m-8'>
          <Link href='/work'>Работа</Link>
        </li>
        <li className='m-8'>
          <Link href='/about'>О нас</Link>
        </li>
        <li className='m-8'>
          <Link href='/contacts'>Контакты</Link>
        </li>
      </ul>
        
        
    </nav>
  )
}
