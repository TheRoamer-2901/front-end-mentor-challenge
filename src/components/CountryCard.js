import React from 'react';
import { StyledCard } from '../styles/CountryCard.styled';
import { useNavigate } from 'react-router-dom';

export default function CountryCard( {country} ) {
  const navigate = useNavigate();
  return (
    <StyledCard 
      className='card'
      onClick={() => navigate(`/country/${country.name.common}`)}
    > 
        <div className='flag'>
          <img src={country.flags.png} alt='flag'/>
        </div>
        <div className='info'>
            <h2>{country.name.common}</h2>
            <p><span>Population: </span>{country.population.toLocaleString('en-US')}</p>
            <p><span>Region: </span>{country.region}</p>
            <p><span>Capital: </span>{country.capital}</p>
        </div>
    </StyledCard>
  )
}

