import { useContext } from "react"
import { CartContext } from "../context/cart"

export const useCart = () => {
  const { cart, addToCart, removeItem, clearCart } = useContext(CartContext)

  // if (cart === undefined) {
  //   throw new Error("useCart must be used within a CartProvider")
  // }

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return {cart, addToCart, removeItem, clearCart, checkProductInCart}
}