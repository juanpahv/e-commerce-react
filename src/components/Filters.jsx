import './css/filters.css'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

function Filters() {
  const minPriceFilterId = useId()
  const categoryFilerId = useId()
  const { filters, setFilters } = useFilters()

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input 
          type="range"
          id={minPriceFilterId}
          min={0}
          max={1000}
          value={filters.minPrice}
          onChange={handleChangeMinPrice} />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilerId}>Filters</label>
        <select id={categoryFilerId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>
    </section>
  )
}

export default Filters