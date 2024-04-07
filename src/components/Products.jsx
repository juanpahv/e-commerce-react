import { useCart } from '../hooks/useCart'
import './css/products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export function Products({ products }) {
  const { addToCart, removeItem, checkProductInCart } = useCart()

  return (
    <div className="products">
      <ul>
        {products.slice(0, 20).map((product) => {
        const isProductInCart = checkProductInCart(product)
        return (
          <li key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <div>
            <strong>{product.title}</strong> - ${product.price}
          </div>
          <div>
            <button onClick={() => {
              isProductInCart ? removeItem(product) : addToCart(product)
            }}>
              {
              isProductInCart ? 
              <RemoveFromCartIcon /> :
              <AddToCartIcon />
              }
            </button>
          </div>
        </li>
        )})}
      </ul>
    </div>
  )
}