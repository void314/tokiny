import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['cyrillic'],
  weight: '400',
})

export default function Home() {
  return (
    <div className={ inter.className }>
        О нас
    </div>
  )
}
