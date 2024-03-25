import { createGlobalStyle } from 'styled-components'
import { CartContextProvider } from '@/components/CartContext'
import Footer from '@/components/footer/containers/footer'
import '../components/carousel/carousel-autoplay.css'
import Header from '@/components/Header'
import Toast from '@/components/Toast'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  @font-face{
    font-family: 'Norwester';
    src: url('/norwester/norwester.otf');
  }
  body{
    background-color: hsl(0, 0%, 95%);
    padding:0;
    margin:0;
    min-height : 100vh;
    font-family: 'Poppins', sans-serif;
  }
  
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />

      <CartContextProvider>
        <Toast text={'The product has been added.'}></Toast>
        <Header />
        <Component {...pageProps} />

        <Footer />
      </CartContextProvider>
    </>
  )
}
