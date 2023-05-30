import { useEffect, useState } from 'react'
import Header from './components/Header'
import Countries from './components/Countries'
import './index.css'

const App = () => {
  const [countryData, setCountryData] = useState()
  const [searchquery, setSearchquery] = useState('')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then(res => res.json())
      .then(data => setCountryData(data))
  }, [])
  // console.log(searchquery, filter)
  return (
    <div>
      <Header />
      <div className='searchBox'>
        <input
          className='searchInput'
          type='search'
          placeholder='Search for a country...'
          onChange={e => setSearchquery(e.target.value)}
        />
        <select
          aria-label='Filter by Region'
          onChange={e => setFilter(e.target.value)}
        >
          <option value='All'>Filter by Region</option>
          <option value='africa'>Africa</option>
          <option value='america'>America</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </div>

      <Countries countryArr={countryData} query={searchquery} filter={filter} />
    </div>
  )
}

export default App
