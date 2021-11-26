const Usercard = ({id,name,url,avatar})=>{
    return (
        <div style={{display: 'flex', gap: '2rem',border: '1px solid black' ,padding: '1rem'}}>
            <img width="50px" src={avatar} alt={id} />
            <div>{name}</div>
            <div>{url}</div>
        </div>
    )
};
export default Usercard;
