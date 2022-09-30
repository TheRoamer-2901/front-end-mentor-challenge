import { useContext } from 'react';
import { themeContext } from '../helper/context';

export function useTheme(){
    return useContext(themeContext);
}