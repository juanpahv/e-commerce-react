import { Products } from "./components/Products"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useFilters } from "./hooks/useFilters"
import { useProducts } from "./hooks/useProducts"
import { CartProvider } from "./context/cart"
import { Cart } from "./components/Cart"

function App() {
  const products = useProducts()
  const { filteredProducts } = useFilters()

  const initialProducts = filteredProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={initialProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App