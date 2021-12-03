import React from 'react';
import axios from 'axios';
import {Appcontext} from "../Context/context"
const Navbar = () => {
    const {handleLogin,handleLogout} = React.useContext(Appcontext)
    const [data,setData] = React.useState({
        username:"",
        password:""
    })
    const handleChange = (e)=> {
        setData({...data,[e.target.name]: e.target.value})
    }
    const Login = ()=> {
        const config = {
            method: 'post',
            url : 'https://reqres.in/api/login',
            data: data
        }
        axios(config)
        .then((response)=>{
            console.log(response.data)
            handleLogin(response.data)
            alert('Login successful')
        })
    }
    const Logout = ()=> {
        handleLogout()
        alert('Logout successful')
    }
    return(
        <div style={{width: '100%', height: '50px',background: 'black',color:'aqua',display: 'flex',gap:'2rem',padding: '1rem',justifyContent: 'center'}}>
            <input name="username" type="text" placeholder="enter your username" value={data.username} onChange={handleChange}/>
            <input name="password" type="text" placeholder="enter your password" value={data.password} onChange={handleChange}/> 
            <button onClick={Login}>Plese Login</button>
            <button onClick={Logout}>Plese Logout</button>
        </div>
    )
}
export  {Navbar};