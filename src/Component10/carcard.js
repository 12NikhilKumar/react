const Carcard = ({url,name,price,type,year})=>{
    return (
        <div style={{width:"600px",height:"600px",border:'1px solid black',lineHeight:'5px',backgroundColor:'white',color:'black', margin:'auto',marginTop:'5px'}}>
            <img style={{width:'80%',height:'40%' ,padding:'1.5rem'}} src={url} alt="img" />
            <h4>{name}</h4>
            <h4>{price}</h4>
            <h4>{type}</h4>
            <h5>{year}</h5>
            <button>Buy Now</button>
        </div>
    )
}
export default Carcard