import React from 'react';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import { FunctionBox } from '../styles/FunctionBar.styled';

export default function FunctionBar() {
  return (
    <FunctionBox>
        <SearchBar />
        <FilterBar />
    </FunctionBox>
  )
}

