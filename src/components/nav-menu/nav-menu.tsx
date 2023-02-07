import Link from 'next/link'
import React from 'react'

export default function NavMenu() {
  return (

    <nav>
      <ul>
        <li>
          <Link href='/menu'>Меню</Link>
        </li>
        <li>
          <Link href='/stock'>Акции</Link>
        </li>
        <li>
          <Link href='/delivery'>Доставка</Link>
        </li>
        <li>
          <Link href='/work'>Работа</Link>
        </li>
        <li>
          <Link href='/about'>О нас</Link>
        </li>
        <li>
          <Link href='/contacts'>Контакты</Link>
        </li>
      </ul>
        
        
    </nav>
  )
}
