import {useState,useEffect} from "react";
import Usercard from "./usercard"
const Effect = ()=>{
    const [isloding,SetLoding] = useState(true);
    const [data,setData] = useState([]);
    const getusers = (query = "masai") => {
        return fetch(`https://api.github.com/search/users?q=${query}`).then((res) => res.json()
        );
    };
    useEffect(()=>{
        getusers()
        .then((res)=>{
            setData(res);
            SetLoding(false);
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);
    return (
        <div>
            {isloding ? (
                <h3>loding..</h3>
            ):(
                <>
                    {data?.items?.map((user)=>(
                        <Usercard
                            key={user.id}
                            id={user.login}
                            name={user.login}
                            url={user.url}
                            avatar = {user.avatar_url}
                        />
                    ))}
                </>
            )}
        </div>
    )

}
export default Effect