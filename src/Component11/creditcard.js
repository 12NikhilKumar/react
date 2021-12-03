import styled from 'styled-components'
import {useState} from "react";
const Button = styled.button`
    background : #F6425B;
    color : white;
    width : 150px;
    height : 47px;
    border : none;
    borderRadius : 5px;
    margin-top : 15px;
`;
const Input = styled.input`
    width:90%;
    height:30px;
    border: none;
    border-bottom : 2px solid #F6425B;
`;
const Input2 = styled.input`
    width:25%;
    height:40px;
    border: none;
    border-bottom : 2px solid #F6425B;
    margin-left : 5%;
`
const Card = ({number,name,date,month,year})=> {
    return (
        <div style={{backgroundColor:'#F6425B',color:'white',width:'500px',height:'300px',padding: '1rem'}}>
            <p style={{textAlign: 'right'}}>{name}</p>
            <div style={{textAlign: 'center',padding: '1rem',fontSize:'25px',fontWeight:'bold',marginTop: '15px'}}>
                {number}
            </div>
            <div style = {{display: 'flex',gap:'2rem',marginTop: '70px'}}>
                <div>{date}</div>
                <div>{month}</div>
                <div>{year}</div>
            </div>
        </div>
    )
}
const Form = ()=> {
    const [loding,isloding] = useState(false);
    const [data,setData] = useState({
        name:"",
        number: "",
        date: "",
        month: "",
        expiry: ""
    })
    const handleChange = (e) => {
        setData({...data,[e.target.name]: e.target.value})
    }
    const handlePayment = ()=>{
        isloding(!loding);
    }
    return (
        <>
        <div style={{width:'400px',height:'350px',backgroundColor:'white',color:'black'}}>
            <div>Payment details</div>
            <label style={{color:'grey',fontSize:'16px'}}>
                CANDIDATE NAME
            <Input name="name" onChange={handleChange} value={data.name}></Input>
            </label>
            <label style={{color:'grey',fontSize:'16px'}}>
                CARD NUMBER
            <Input name="number" onChange={handleChange} value={data.number}></Input>
            </label>
            <div style = {{display: 'flex'}}>
                <Input2 name="date" onChange={handleChange} value={data.date} style = {{textAlign: 'center'}}placeholder ="date"></Input2>
                <Input2 name="month" onChange={handleChange} value={data.month} style = {{textAlign: 'center'}} placeholder ="month"></Input2>
                <Input2 name="expiry" onChange={handleChange} value={data.expiry} style = {{textAlign: 'center'}} placeholder ="expiry"></Input2>
            </div>
            <span>Payment amount 12500</span>
            <Button onClick={handlePayment}>PAY</Button>
        </div>
        {loding?(<Card number={data.number} name={data.name} date={data.date} month={data.month} year={data.expiry}/>):(<>"plese fill the details"</>)}
        </>
    )
}
export default Form;