import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['cyrillic'],
  weight: '400',
})

export default function Delivery() {
  return (
    <div className={ inter.className }>
        Доставка
    </div>
  )
}
