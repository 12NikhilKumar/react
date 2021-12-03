import React  from "react";
export const Appcontext = React.createContext();
const AppcontextProvider = ({children}) =>{
    const [isauth,setIsauth] = React.useState(false);
    const [token,setToken] = React.useState("");
    const [theme,setTheme] = React.useState("red");
    const handleTheme = ()=>{
        if(theme === "red"){
            setTheme("black")
        }
        else{
            setTheme("red")
        }
    }
    const handleLogin = (response) => {
        setIsauth(true);
        setToken(response);
    };
    const handleLogout = () => {
        setIsauth(false);
    };
    const value = {isauth,token,handleLogin,handleLogout,theme,handleTheme};
    return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>
};
export {AppcontextProvider}