import { Link } from "react-router-dom";
const Navbar = ()=> {
    return (
        <div style={{display: 'flex', width: '100%',height: '50px',padding:'1rem',justifyContent: 'center',backgroundColor:'black',color:'aqua',gap: '1.5rem'}}>
            <Link to="/">Home</Link>
            <Link to="/all">all Products</Link>
        </div>
    )
}
export default Navbar