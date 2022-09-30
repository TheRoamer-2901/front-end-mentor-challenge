import React, { useState, useMemo } from 'react';
import { StyledSearchBar } from '../styles/SearchBar.styled';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useData } from '../hooks/useData';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const navigate = useNavigate();
  const { data } = useData();
  const [searchValue, setSearchValue] = useState("");
  const [searchIndex, setSearchIndex] = useState(-1);
  const [expanded, setExpanded] = useState(false);


  let matchedCountry = useMemo(() => {
    return data.filter(country => country.name.common.toLowerCase().includes(searchValue.toLowerCase()));
  }, [searchValue, data])

  
  let searchResult = matchedCountry.length 
    ? matchedCountry.map((country, index) => 
        <p 
          key={index}
          className={searchIndex === index ? "selected" : ""}
        >
          {country.name.common}
        </p>)
    : <p>Country not found!</p>

  function inputHandler(e) {
    setSearchValue(e.target.value);
    setSearchIndex(-1);
    if(e.target.value) setExpanded(true);
  }
  function searchHandler(e) {
    if(e.key === "Enter" && searchValue && !expanded) navigate(`/country/${searchValue}`);
  }
  function keyboardHandler(e) {
    switch(e.key) {
      case 'ArrowUp':
        setSearchIndex(prevIndex => {
          if(prevIndex === 0) return searchResult.length-1;
          else return prevIndex-1;
        });
        break;
      case 'ArrowDown':
        setSearchIndex(prevIndex => {
          if(prevIndex === searchResult.length-1) return setSearchIndex(0);
          else return prevIndex+1;
        });
        break;
      case 'Enter':
        setSearchValue(matchedCountry[searchIndex].name.common);
        setExpanded(false);
        break;
      default:
        break;
    }
  }

  return (
    <StyledSearchBar className='search-bar'
      onKeyDown={(e) => keyboardHandler(e)}
    >
        <div className='search-value'>
          <SearchOutlinedIcon className='search-icon' 
            onClick={() => {if(searchValue) navigate(`country/${searchValue}`)}}
          />
          <input 
            type='text'   
            placeholder='Search for a country...'
            onChange={(e) => inputHandler(e)}
            onKeyDown={(e) => searchHandler(e)}
            value={searchValue}
          />
        </div>
       
        {searchValue && expanded &&
          <div className='search-result'>
            {searchResult}
          </div>
        }
    </StyledSearchBar>
  )
}
