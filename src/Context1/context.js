import React from 'react';
export const Appcontext = React.createContext();
const AppcontextProvider = ({children}) => {
    const [theme,setTheme] = React.useState('white');
    const [color,setColor] = React.useState('black');
    const handleTheme = ()=>{
        if(theme === 'white'){
            setTheme('black');
            setColor('white');
        }
        else {
            setTheme('white');
            setColor('black');
        }
    }
    const value = {theme,handleTheme,color};
    return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>
}
export {AppcontextProvider}
