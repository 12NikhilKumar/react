import List from './list.js';
function Category({title}){
    if(title == "Mobile Oprating System"){
        return (
            <>
                <h1>{title}</h1>
                <List brand="android"/>
                <List brand="Black Bery"/>
                <List brand="Windows"/>
                <List brand="i phoen"/>
            </>
        )
    }
    else{
        return (
            <>
                <h1>{title}</h1>
                <List brand="Samsung"/>
                <List brand="Black Bery"/>
                <List brand="htc"/>
                <List brand="Apple"/>
            </>
        )
    }
}
export default Category