import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { StyledFlex } from '../styles/FlexContainer';
import { useData } from '../hooks/useData';
import { useParams } from 'react-router-dom';
import { StyledDetail } from '../styles/Detail.styled'; 


export default function CountryDetail() {
    const { data } = useData();
    const { name } = useParams();
    const [countryName, setCountryName] = useState(name);

    useEffect(() => {
        setCountryName(name);
    }, [name]);    

    const country = data.find(country => country.name.common.toLowerCase() === countryName.toLowerCase());
    //if country does not exist, return not found component
    if(!country) 
    return(
        <div className='detail'>
            <Button className='back-btn btn' content="⬅ Back" path='/'/>
            <h2 class='h2'>Country not found!</h2>
        </div>
    )

    const [ currencyKey ] = Object.keys(country.currencies);
    const [ nativeKey ] = Object.keys(country.name.nativeName);
    const [ languageKey] = Object.keys(country.languages);

    let border = [];
    country.borders?.forEach(borderCode => {
        border = [...border, getCountryByCode(borderCode, data)];
    })

    const borderList = border?.map((borderName, index) => 
        <Button 
            content={borderName} 
            path={`/country/${borderName}`}
            key={index}
            className="btn"
        />)


    
    return(
        <StyledDetail className='detail'>   
            <Button className='back-btn btn' content="⬅ Back" path='/'/>
            <StyledFlex gap="8rem" className='layer1'>
                <div className='flag'>
                    <img 
                    src={country.flags.png}
                    alt='flag'  
                    />
                </div>
                <div className='info'>
                    <h2 style={{marginBottom:"2rem"}}>{country.name.common}</h2>
                    <StyledFlex gap="5rem" style={{marginBottom: "3rem"}} className='layer2'>
                        <div className='col'>
                            <div><span>Native Name: </span>{country.name.nativeName[nativeKey].common}</div>
                            <div><span>Population: </span>{country.population.toLocaleString('en-US')}</div>
                            <div><span>Region: </span>{country.region}</div>
                            <div><span>Sub Region: </span>{country.subregion}</div>
                            <div><span>Capital: </span>{country.capital}</div>
                        </div>
                        <div className='col'>
                            <div><span>Top Level Domain: </span>{country.tld}</div>
                            <div><span>Currencies: </span>{country.currencies[currencyKey].name}</div>
                            <div><span>Languages: </span>{country.languages[languageKey]}</div>
                        </div>
                    </StyledFlex>
                    <StyledFlex gap="1rem" className='layer2'>
                        <div className="border-text">
                            <span>Border Countries:</span>
                        </div>
                        <div className='border-list'>
                            {borderList.length ? borderList : 
                            <Button className='btn' content="none" path='/country/notfound' />}
                        </div>
                    </StyledFlex>
                </div>   
            </StyledFlex>
        </StyledDetail>    
        )    
}


function getCountryByCode(countryCode, countryList) {
    const res = countryList.filter(country => country.cca3 === countryCode);
    return res[0]?.name.common;
}