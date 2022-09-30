import React, { useState } from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import { StyledFilter } from '../styles/FilterBar.styled';
import { useNavigate } from 'react-router-dom';


const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const defaultFilter = "Filter By Region";


export default function FilterBar() {
    const [expanded, setExpanded] = useState(false);
    const [filterValue, setFilterValue] = useState(defaultFilter);
    const navigate = useNavigate();

    function handleSelect(e){
        setExpanded(false);
        setFilterValue(e.target.innerHTML);
        navigate(`/${e.target.innerHTML}`);
    }

    function toggleExpanded(){
        setExpanded(prevExpanded => !prevExpanded);
    }

    function setDefault(e){
        e.stopPropagation();
        setFilterValue(defaultFilter);
        setExpanded(false);
        navigate('/');
    }

    const filterOptions = 
        options.map((option, index) => <p onClick={handleSelect} key={index}>{option}</p>)

    return (
        <StyledFilter className='filter-bar'>
            <div className='filter-value' onClick={() => toggleExpanded()}>
                <p>{filterValue}</p>
                {
                    filterValue !== defaultFilter 
                    ? <ClearIcon onClick={setDefault}/> 
                    : <KeyboardArrowDownOutlinedIcon/>
                }
            </div>
            {
            expanded && 
            <div className='filter-option'>
                {filterOptions}
            </div>
            }
        </StyledFilter>
    )
}

