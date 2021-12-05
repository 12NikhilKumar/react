import {Route} from "react-router-dom"
import Productinfo from "../Component14/details"
import Home from "../Component14/home"
import AllProduct from "../Component14/product"
const  AllRoutes = ()=>{
    return(
        <>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/all">
                <AllProduct/>
            </Route>
            <Route exact path="/users/:id">
                <Productinfo/>
            </Route>
        </>
    )
}
export default AllRoutes