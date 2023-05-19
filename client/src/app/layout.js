// css
import "./globals.css"
import { Bangers, Quicksand, Roboto_Condensed } from "next/font/google"
// components
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import CartMobileIcon from "./components/CartMobileIcon"
// provider
import CartProvider from "./context/CartContext"
import CartMobile from "./components/CartMobile"

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
})

const bangers = Bangers({
  subsets: ["latin"],
  variable: "--font-bangers",
  weight: ["400"],
})

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-robotoCondensed",
  weight: ["300", "400", "700"],
})

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <body
          className={`${quicksand.variable} ${bangers.variable} ${robotoCondensed.variable} font-quicksand`}
        >
          <Nav />
          <CartMobileIcon />
          <CartMobile />
          {children}
          <Footer />
        </body>
      </html>
    </CartProvider>
  )
}
