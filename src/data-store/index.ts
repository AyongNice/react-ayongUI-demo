import {useEffect, useState} from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
    return [theme, setTheme]

};

