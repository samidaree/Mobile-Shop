import { createGlobalStyle } from 'styled-components'
import { CartContextProvider } from '@/components/CartContext'
import Footer from '@/components/footer/containers/footer'
import '../components/carousel/carousel-autoplay.css'
import Header from '@/components/Header'
import Toast from '@/components/Toast'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const GlobalStyles = createGlobalStyle`
 
  body{
    background-color: hsl(0, 0%, 95%);
    padding:0;
    margin:0;
    min-height : 100vh;
    font-family: 'Poppins', sans-serif;
  }
  a{
    text-decoration: none;
  color: inherit;
  }
  
`

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <GlobalStyles />

      <CartContextProvider>
        <Toast text={'The product has been added.'}></Toast>
        <Header />
        <Component {...pageProps} />

        <Footer />
      </CartContextProvider>
    </main>
  )
}
