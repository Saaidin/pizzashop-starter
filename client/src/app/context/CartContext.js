"use client"

import { createContext, useState } from "react"
// create context
export const CartContext = createContext()

export default function CartProvider({ children }) {
  // cart open state
  const [isOpen, setIsOpen] = useState(false)
  // cart state
  const [cart, setCart] = useState([])

  // add to cart
  const addToCart = (
    id,
    image,
    name,
    price,
    additionalTopping,
    size,
    crust
  ) => {
    console.log(id, image, name, price, additionalTopping, size, crust)
    // sort additionalTopping array by name
    additionalTopping.sort((a, b) => a.name.localeCompare(b.name))

    const newItem = {
      id,
      image,
      name,
      price,
      additionalTopping,
      size,
      crust,
      amount: 1,
    }

    setCart([...cart, newItem])
  }
  console.log(cart)
  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cart }}>
      {children}
    </CartContext.Provider>
  )
}
