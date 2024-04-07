import { useEffect, useState } from "react"
import { products as getProducts } from '../services/products'

export function useProducts(){
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((newProducts) => {
      setProducts(newProducts)
    })
    
  }, [])

  return products
}