import React from 'react';
import CountryCard from './CountryCard';
import { StyledCountryList } from '../styles/CountryList.styled';

export default function CountryList( {countryList} ) {

  const CardList = countryList.map((country, index) => <CountryCard country={country} key={index}/>)
  return (
    <StyledCountryList>
      {CardList} 
    </StyledCountryList>
  )
}
