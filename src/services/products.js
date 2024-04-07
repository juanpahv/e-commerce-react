const url = 'https://dummyjson.com/products'

export async function products() {
  const response = await fetch(url)
  const data = await response.json()
  const products = data.products
  return products
}