import { useContext } from 'react';
import { dataContext } from '../helper/context';

export function useData(){
    return useContext(dataContext);
}