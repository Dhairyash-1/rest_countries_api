import { useState } from 'react'
import '../index.css'
import PropTypes from 'prop-types'
// import { DarkStyle, LightStyle } from './Header'

const CountryCard = ({ name, flag, population, region, capital }) => {
  return (
    <div className='countryCard'>
      <img src={flag} alt='' />
      <div className='details'>
        <h2> {name}</h2>
        <p>
          {' '}
          <span>Population:</span>
          {population}
        </p>
        <p>
          {' '}
          <span>Region:</span> {region}
        </p>
        <p>
          {' '}
          <span>Capital:</span> {capital}
        </p>
      </div>
    </div>
  )
}
CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.string,
}
export default CountryCard
