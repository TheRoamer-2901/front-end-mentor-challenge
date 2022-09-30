import React, { useState, useEffect } from "react";
import FunctionBar from '../components/FunctionBar';
import CountryList from '../components/CountryList';
import Pagination from "../components/Pagination";
import { useParams } from 'react-router-dom';
import { useData } from '../hooks/useData';

export default function Home(){
    const { continent } = useParams();
    const { data } = useData();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [continent])

    const itemPerPage = 20;
    const startItem = (currentPage-1) * itemPerPage;
    const endItem = startItem + itemPerPage;

    const countryList = !continent ? data : data.filter(country => country.region.toLowerCase() === continent.toLowerCase());
    const pageList = countryList.slice(startItem, endItem);
       
    return(
        <div>
            <FunctionBar />
            <CountryList countryList={pageList} />
            <Pagination 
                itemPerPage={itemPerPage}
                totalItem={countryList.length} 
                setCurrentPage={setCurrentPage}/>
        </div>
    )
}