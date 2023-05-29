import { useState } from 'react'

const SearchCountry = props => {
  const [input, setInput] = useState('')
  // console.log(input)
  return (
    <div className='searchBox'>
      <input
        className='searchInput'
        type='search'
        placeholder='Search for a country...'
      />
      <select
        name=''
        aria-label='Filter by Region'
        id=''
        onChange={e => {
          let value = e.target.value
          return props.send(value)
        }}
      >
        <option value='All'>Filter by Region</option>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceanina'>Oceania</option>
      </select>
    </div>
  )
}

export default SearchCountry
