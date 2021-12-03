import React from 'react';
import axios from 'axios';
import {Appcontext} from "../Context/context"
import Form from '../Component11/creditcard'
const Navbar = () => {
    const {handleLogin,handleLogout,handleTheme} = React.useContext(Appcontext)
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
    const ChangeThem = ()=> {
        handleTheme()
    }
    return(
        <>
        <div style={{width: '100%', height: '50px',background: 'black',color:'aqua',display: 'flex',gap:'2rem',padding: '1rem',justifyContent: 'center'}}>
            <button onClick={ChangeThem}>Change Them</button>
            <input name="username" type="text" placeholder="enter your username" value={data.username} onChange={handleChange}/>
            <input name="password" type="text" placeholder="enter your password" value={data.password} onChange={handleChange}/> 
            <button onClick={Login}>Plese Login</button>
            <button onClick={Logout}>Plese Logout</button>
        </div>
        <Form/>
        </>
    )
}
export  {Navbar};