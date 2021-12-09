import axios from "axios";
import React from "react"
import { Cartcontext } from "../Cartcontext/cartcontext"
const Card = ({name,src,description,price,quantity,Increse,Reduce,handleCart}) =>{
    return (
        <div style={{display: 'flex',border:'1px solid black',gap:'150px',padding: '1rem'}}>
                <img src={src}/>
                <div style={{display: 'flex',direction: 'column',gap:'50px',padding: '1rem'}}>
                    <p>{name}</p>
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
                <div>
                    <div style={{display: 'flex',gap:'2rem',padding: '1rem'}}><button onClick={Reduce}>-</button>{quantity}<button onClick={Increse}>+</button></div>
                    <button onClick={handleCart}>Add to Cart</button>
                </div>
        </div>
    )
}
const Home = () => {
    const [data,setData] = React.useState([]); 
    React.useEffect(() => {
        const config = {
            method: 'get',
            url: 'http://localhost:3000/items'
        }
        axios(config)
        .then((response) => {
            // console.log(response.data);
            setData([...response.data]);
        })
    },[])
    const handleReduce = (item) => {
        item -= 1;
        console.log(item);
    }
    const  handleIncrese = async(item)=>{
        const config = {
            method: "patch",
            url: `http://localhost:3000/items/${item.id}`,
            data:{
                "quantity" : item.quantity++
            }
        }
        const update = await axios(config)
        // console.log(update)
        // console.log(value)
        // await axios({
        //     method: "PATCH",
        //     headers: {
        //         "Access-Control-Allow-Methods" : '*'
        //     },
        //     url: `http://localhost:3000/items/${item.id}`,
        //     data: {
        //         quantity :value
        //     },
        //     }).catch(error => console.error(error));
    }
    const handleClick = (item) => {
        const config = {
            method : 'post',
            url : 'http://localhost:3000/cart',
            data : item
        }
        axios(config)
    }
    return (
        <div>
            {data.map((item) => (
            <Card key={item.id} name={item.product_name} src={item.image_url} description={item.description} price={item.price} quantity={item.quantity} Reduce={()=>handleReduce(item.quantity)} Increse={()=>handleIncrese(item)} handleCart={()=>handleClick(item)}/>
            ))}
        </div>     
    )
}
export default Home;