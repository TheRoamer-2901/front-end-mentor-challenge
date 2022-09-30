import React from 'react';
import {StyledPagination} from '../styles/Pagination.styled'


function Pagination({ totalItem, itemPerPage, setCurrentPage }) {
    const NUM_PAGE = Math.ceil(totalItem/itemPerPage);

    let pageList = [];
    for(let i=1; i <= NUM_PAGE; i++) {
        pageList = [...pageList, <li key={i} onClick={() => setCurrentPage(i)}>{i}</li>]
    }
    return (
        <StyledPagination className='pagination-list'>
            {pageList}
        </StyledPagination>
    )
}

export default Pagination