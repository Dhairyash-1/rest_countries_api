import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CountryCard from './CountryCard'

const Countries = ({ countryArr, query, filter }) => {
  const [country, setCountry] = useState(countryArr)
  const [searchCountry, setSearchCountry] = useState(countryArr)

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

  // on search keyword
  useEffect(() => {
    if (country) {
      let result = country.filter(countryItem => {
        let { capital, name } = countryItem
        let capitalValue = capital ? capital[0].toLowerCase() : 'not available'
        let nameValue = name.common.toLowerCase()
        if (
          capitalValue.includes(query.toLowerCase()) ||
          nameValue.includes(query.toLowerCase())
        ) {
          return countryItem
        }
      })

      setSearchCountry(result)
    }
  }, [query, countryArr, country])

  if (!country) {
    return <div className='loader'>Loading...</div>
  }

  return (
    <div className='containner'>
      {query && searchCountry
        ? searchCountry.map((country, i) => (
            <CountryCard
              key={i}
              name={country.name.common}
              flag={country.flags.png}
              population={country.population.toLocaleString('en-US')}
              region={country.region}
              capital={country.capital ? country.capital[0] : 'no'}
            />
          ))
        : country.map((country, i) => (
            <CountryCard
              key={i}
              name={country.name.common}
              flag={country.flags.png}
              population={country.population.toLocaleString('en-US')}
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
