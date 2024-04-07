import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({children}) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // setCart([...cart, product]) <- esta es la manera más fácil
    // y para agregar un producto si ya existe en el carrito...
    const productIndex = cart.findIndex((item) => item.id === product.id)

    if (productIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productIndex].quantity += 1
      return setCart(newCart)
    }

    // si no existe, lo agregamos
    setCart(
      (prevState) => ([...prevState, { ...product, quantity: 1 }])
    )
  }

  const removeItem = (product) => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeItem,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}