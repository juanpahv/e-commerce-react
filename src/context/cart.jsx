import { createContext, useReducer } from "react";

export const CartContext = createContext()

const initialState = []

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productIndex = state.findIndex((item) => item.id === id)

      if (productIndex >= 0) {
        const newState = structuredClone(state)
        newState[productIndex].quantity += 1
        return newState
      }

      return [...state, { ...actionPayload, quantity: 1 }]
    }

    case 'REMOVE_ITEM': {
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }

    case 'CLEAR_CART': {
      return initialState
    }
  }
}

export function CartProvider ({children}) {
  // const [cart, setCart] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState)

  // const addToCart = (product) => {
  //   // setCart([...cart, product]) <- esta es la manera más fácil
  //   // y para agregar un producto si ya existe en el carrito...
  //   const productIndex = cart.findIndex((item) => item.id === product.id)

  //   if (productIndex >= 0) {
  //     const newCart = structuredClone(cart)
  //     newCart[productIndex].quantity += 1
  //     return setCart(newCart)
  //   }

  //   // si no existe, lo agregamos
  //   setCart(
  //     (prevState) => ([...prevState, { ...product, quantity: 1 }])
  //   )
  // }

  // const removeItem = (product) => {
  //   setCart(prevState => prevState.filter(item => item.id !== product.id))
  // }

  // const clearCart = () => {
  //   setCart([])
  // }

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const removeItem = (product) => {
    dispatch({ type: 'REMOVE_ITEM', payload: product })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeItem,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}