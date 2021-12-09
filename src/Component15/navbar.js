import {Link} from 'react-router-dom'
const Navbar = ()=>{
    return(
        <div style={{display: 'flex',width: '100%',height:'40px',padding: '1rem',backgroundColor:'red',gap:'100px',justifyContent: 'center'}}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        </div>
    )
};
export default Navbar;