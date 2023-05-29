import { useEffect, useState } from 'react'
import CountryCard from './components/CountryCard'
import Header from './components/Header'
import './index.css'
import SearchCountry from './components/SearchCountry'

const App = () => {
  const [countries, setCountries] = useState()
  const [loader, setLoader] = useState(true)

  function getData(input) {
    console.log(input)
    // setCountries(input)
  }

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then(res => res.json())
      .then(countryList => {
        setCountries(countryList)

        setLoader(false)
      })
  }, [])

  return (
    <div>
      <Header />
      <SearchCountry send={getData} />
      {loader ? (
        <div className='loader'>Loading...</div>
      ) : (
        <div className='containner'>
          {countries.map((country, i) => (
            <CountryCard
              key={i}
              allCountry={countries}
              name={country.name.official}
              flag={country.flags.png}
              population={Number(country.population.toLocaleString('en-US'))}
              region={country.region ? country.region : 'not avialable'}
              capital={country.capital ? country.capital[0] : 'no capital'}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
