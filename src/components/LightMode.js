import { useState } from 'react'

export const LightMode = () => {
    const [ theme, setTheme ] = useState('dark');
    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }
    return [ theme, toggleTheme ];
}
export default LightMode;
