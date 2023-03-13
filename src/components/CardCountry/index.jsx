
import React from 'react'
import { Container } from './style'

const CardCountry = ({flag,country,population,region,capital}) => {
  return (
    <Container>
        <figure>
            <img src={flag} alt="" />
        </figure>
        <div className="infoCountry">
            <h2>{country}</h2>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
        </div>
    </Container>
  )
}

export default CardCountry