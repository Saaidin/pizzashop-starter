// css
import "./globals.css"

// components
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import CartMobileIcon from "./components/CartMobileIcon"
// provider
import CartProvider from "./context/CartContext"
// components
import CartMobile from "./components/CartMobile"
import CartDesktop from "./components/CartDesktop"

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <body>
          <Nav />
          <CartMobileIcon />
          <CartMobile />
          {children}
          <CartDesktop />
          <Footer />
        </body>
      </html>
    </CartProvider>
  )
}
