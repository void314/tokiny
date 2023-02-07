import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['cyrillic'],
  weight: '400',
})

export default function Contacts() {
  return (
    <div className={ inter.className }>
        Контакты
    </div>
  )
}
