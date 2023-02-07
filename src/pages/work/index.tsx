import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['cyrillic'],
  weight: '400',
})

export default function Work() {
  return (
    <div className={ inter.className }>
        Работа
    </div>
  )
}
