import React  from "react";
export const Appcontext = React.createContext();
const AppcontextProvider = ({children}) =>{
    const [isauth,setIsauth] = React.useState(false);
    const [token,setToken] = React.useState("");
    const handleLogin = (response) => {
        setIsauth(true);
        setToken(response);
    };
    const handleLogout = () => {
        setIsauth(false);
    };
    const value = {isauth,token,handleLogin,handleLogout};
    return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>
};
export {AppcontextProvider}