import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs'
import NavMenu from '@/components/nav-menu/nav-menu'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <NavMenu/>
    <Breadcrumbs/>
    <Component {...pageProps} />
  </>
}
