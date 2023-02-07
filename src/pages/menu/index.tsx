import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['cyrillic'],
  weight: '400',
})

export default function Memu() {
  return (
    <div className={ inter.className }>
        Меню
    </div>
  )
}
