import React from 'react';
import styled from "styled-components"
import {Appcontext} from '../Context1/context'
const Pop = styled.div`
    height: 60px;
    width: 86px;
    left: 91px;
    border-radius: 5px;
    background-color: white;
    margin-top :50px;
    >img {
        max-width: 80%;
        max-height: 80%;
        margin-top: 7px;
    }
    &:hover{
        background: linear-gradient(180deg, #679CF6 0%, #4072EE 100%);
        height: 70px;
        width: 96px;
    }
`
const Navbar = ()=>{
    const {handleTheme} = React.useContext(Appcontext);
    const handleClick = () => {
        handleTheme()
    }
    return (
        <div style ={{display: 'flex',justifyContent: 'center'}}>
            <h1>My Dashboard</h1>
            <button onClick={handleClick} style={{borderRadius:'10%',width:'100px',height:'30px',backgroundColor:'aqua',margin:'55px'}}>Change Theme</button>
        </div>
    )
}
const Sidebar =()=>{
    return (
        <>
        <div style={{
            height: '1024px',
            width: '96px',
            left: '-5px',
            top: '0px',
            backgroundColor: 'white'

        }}>
            <Pop><img src="http://placehold.it" alt=""/></Pop>
            <Pop><img src="https://static.thenounproject.com/png/768953-200.png" alt=""/></Pop>
            <Pop><img src="https://static.thenounproject.com/png/768953-200.png" alt=""/></Pop>
            <Pop><img src="https://static.thenounproject.com/png/768953-200.png" alt=""/></Pop>
            <Pop><img src="https://static.thenounproject.com/png/768953-200.png" alt=""/></Pop>
            <Pop><img src="https://static.thenounproject.com/png/768953-200.png" alt=""/></Pop>
        </div>
        </>
    )
}
const Card = styled.div`
    height: 750px;
    width: 452px;
    left: 122px;
    top: 113px;
    border-radius: 5px;
    margin: auto;

`
const Cardcomonent = ({name,url})=>{
    return (
        <div style={{height:'200px',margin:'1.5rem',border:'1px solid grey',backgroundColor:'grey'}}>
            <div style={{display: 'flex',gap:'50px',padding: '1rem'}}>
                <img style={{maxWidth:'100px',maxheight:'100px'}} src={url} alt=""/>
                <p>{name}</p>
            </div>
            <div style = {{
                height: '6px',
                width: '282px',
                left: '152px',
                top: '256px',
                borderRadius: '3px',
                backgroundColor:'green'
            }}>
            </div>
            <div style={{display: 'flex',gap: '50px'}}>
                <p>Professional Level</p>
                <p>4000 points</p>
            </div>
        </div>
    )
}
const Body = ()=>{
    const {theme,color} = React.useContext(Appcontext);
    return (
        <div style={{ background:`${theme}`,color:`${color}`}}>
            <Navbar/>
            <div style={{display: 'flex'}}>
                <Sidebar/>
                <Card style={{background:`${theme}`,color:`${color}`}}>
                    <p>Active user</p>
                    <Cardcomonent name={"Nikhil"} url={"https://www.w3schools.com/howto/img_avatar.png"}/>
                    <Cardcomonent name={"Ankur"} url={"https://www.w3schools.com/howto/img_avatar.png"}/>
                    <Cardcomonent name={"Aman" }url={"https://www.w3schools.com/howto/img_avatar.png"}/>
                </Card>
            </div>
        </div>
    )
}
export default Body