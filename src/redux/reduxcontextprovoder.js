import React from "react";
export const Appcontext = React.createContext();
export const AppcontextProvider = ({store,children})=>{
    const [count,setCount] = React.useState(0);
    React.useEffect(()=>{
        const unsubscribe = store.subscribe(()=>{
            setCount((prev)=>prev+1);
        },[]);
        return unsubscribe;
    });
    return (
        <Appcontext.Provider value={[count,store]}>{children}</Appcontext.Provider>
    );
}