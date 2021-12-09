import React  from "react";
import { Cartcontext } from "../Cartcontext/cartcontext";
import axios from "axios";
const Table = ({name,price,quantity}) => {
    return(
    <table style={{margin:'auto'}}>
        <tr>
            <td style={{border: '1px solid white',width:'150px',height:'50px'}}>{name}</td>
            <td style={{border: '1px solid white',width:'150px',height:'50px'}}>{price}</td>
            <td style={{border: '1px solid white',width:'150px',height:'50px'}}>{quantity}</td>
        </tr>
    </table>
    )
}
const CardDetails = () => {
    const id = React.useContext(Cartcontext);
    const [data,setData] = React.useState([]);
    var [total,setTotal] = React.useState(0);
    React.useEffect(() => {
        const config = {
            method: 'get',
            url : 'http://localhost:3000/cart'
        }
        axios(config)
        .then((response) =>{
            setData([...response.data])
        })
    },[])
    const fun = () =>{
        for(var i=0;i<data.length;i++){
            total = data[i].price+total;
            setTotal(total);
        }
    }
    React.useEffect(()=>{
        fun()
    },[])
    return(
        <div>
            <h1>Cart Items</h1>
            {data.map((cart) =>(
                <Table key={cart.id} name={cart.product_name} price={cart.price} quantity={cart.quantity}/>
            ))}
            <h1>total price{total}</h1>
        </div>
    )
}
export default CardDetails;