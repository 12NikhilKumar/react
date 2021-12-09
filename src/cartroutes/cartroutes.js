import {Route} from 'react-router-dom';
import CardDetails from '../Component15/carddetails';
import Home from '../Component15/home';
const Cartroute = ()=>{
    return(
    <>
    <Route exact path="/">
        <Home/>
    </Route>
    <Route exact path="/cart">
        <CardDetails/>
    </Route>
    </>
    )
}
export default Cartroute