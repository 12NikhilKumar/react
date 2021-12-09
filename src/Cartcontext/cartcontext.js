import React  from "react";
export const Cartcontext = React.createContext();
const CartcontextProvider = ({children}) =>{
    const [id,setId] = React.useState([])
    const set = (response) =>{
        setId([...id,response]);
    }
    const value = {id,set}
    return (
        <Cartcontext.Provider value={value}>
            {children}
        </Cartcontext.Provider>
    )
}
export default CartcontextProvider;
