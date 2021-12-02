const ToolBaritems = ({label}) => {
    return(
        <div style={{width:'150px',height:'30px',padding: '1rem',backgroundColor:'black',color:'white'}}>{label}</div>
    )
}
const Toolname = ({label}) => {
    return(
        <div style={{width:'200px',height:'30px',padding: '1rem',backgroundColor:'white',color:'black'}}>{label}</div>
    )
}
const ToolBar = () => {
    return (
        <div style={{display: 'flex',gap: '2rem',width: '90%',height: '60px',backgroundColor:'aqua',padding: '1rem',justifyContent: 'center'}}>
            <Toolname label={"MASAI"}/>
            <ToolBaritems label={"Aboutus"}/>
            <ToolBaritems label={"Home"}/>
            <ToolBaritems label={"Signup"}/>
            <ToolBaritems label={"Login"}/>
        </div>
    )
}
export default ToolBar;