import React, { useState } from 'react'
import stations from '../api/gares.json'
import CityCard from './CityCard'

function CityCards() {
  const [cities, setCities] = useState(Object.keys(stations))
  // const cities = Object.keys(stations)
  console.log(cities)
  console.log(setCities)

  //setCities(cities)

  return (
    <div className="city-cards">
      {cities.map((city) => {
        return <CityCard key={city} city={city} />
      })}
    </div>
  )
}

export default CityCards
