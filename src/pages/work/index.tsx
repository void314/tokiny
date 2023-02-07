import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs'
import NavMenu from '@/components/nav-menu/nav-menu'
import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['cyrillic'],
  weight: '400',
})

export default function Work() {
  return (
    <div className='max-w-5xl m-auto flex flex-col items-center justify-evenly'>
      <NavMenu/>
      <Breadcrumbs/>
      Работа
    </div>
  )
}
