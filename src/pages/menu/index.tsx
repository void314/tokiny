import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs'
import NavMenu from '@/components/nav-menu/nav-menu'
import Card from '@/components/product-card/product-card'
import { Inter } from '@next/font/google'

import { getAllProduct } from '@/ky/index'

const inter = Inter({
  subsets: ['cyrillic'],
  weight: '400',
})

export default function Memu() {
  return (
    <div className='max-w-5xl m-auto flex flex-col items-center justify-evenly'>
      <NavMenu/>
      <Breadcrumbs/>
      Меню
      <button onClick={ getAllProduct }>test</button>
      <div className='flex flex-wrap items-center justify-between max-w-5xl'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
