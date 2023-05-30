import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CountryCard from './CountryCard'

const Countries = ({ countryArr, query, filter }) => {
  const [country, setCountry] = useState(countryArr)
  useEffect(() => {
    if (filter == 'asia') {
      let AsianCountries = countryArr.filter(country => {
        return country.region == 'Asia'
      })
      setCountry(AsianCountries)
    } else if (filter == 'america') {
      let americanCountries = countryArr.filter(country => {
        return country.region == 'Americas'
      })
      setCountry(americanCountries)
    } else if (filter == 'africa') {
      let africanCountries = countryArr.filter(country => {
        return country.region == 'Africa'
      })
      setCountry(africanCountries)
    } else if (filter == 'europe') {
      let EuropeanCountries = countryArr.filter(country => {
        return country.region == 'Europe'
      })
      setCountry(EuropeanCountries)
    } else if (filter == 'Oceania') {
      let OceanCountries = countryArr.filter(country => {
        return country.region == 'Oceania'
      })
      setCountry(OceanCountries)
    } else {
      setCountry(countryArr)
    }
  }, [countryArr, filter])

  if (!country) {
    return <div className='loader'>Loading...</div>
  }

  return (
    <div className='containner'>
      {country.map((country, i) => (
        <CountryCard
          key={i}
          name={country.name.official}
          flag={country.flags.png}
          population={Number(country.population)}
          region={country.region}
          capital={country.capital ? country.capital[0] : 'no'}
        />
      ))}
    </div>
  )
}
Countries.propTypes = {
  countryArr: PropTypes.array,
  query: PropTypes.string,
  filter: PropTypes.string,
}
export default Countries
