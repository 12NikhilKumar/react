const Sidebaritem = ({left,right})=>{
    return (
        <div style={{display: 'flex',padding: '1rem',gap: '1rem'}}>
            <img style={{width: '28px', height:'25px'}} src={left} alt="logo"/>
            <div>{right}</div>
        </div>
    )
}
const Sidebar = () => {
    return (
        <div style={{maxHeight:'500px',width:'250px',border:'1px solid blue',backgroundColor:'white',color:'grey',overflow:'scroll'}}>
            <Sidebaritem left={"https://png.pngtree.com/png-vector/20210214/ourlarge/pngtree-mail-icon-png-image_2921398.jpg"} right={"inbox"}/>
            <Sidebaritem left={"https://png.pngtree.com/png-vector/20210214/ourlarge/pngtree-mail-icon-png-image_2921398.jpg"} right={"Starred"}/>
            <Sidebaritem left={"https://png.pngtree.com/png-vector/20210214/ourlarge/pngtree-mail-icon-png-image_2921398.jpg"} right={"Draft"}/>
            <Sidebaritem left={"https://png.pngtree.com/png-vector/20210214/ourlarge/pngtree-mail-icon-png-image_2921398.jpg"} right={"Send mail"}/>
            <Sidebaritem left={"https://png.pngtree.com/png-vector/20210214/ourlarge/pngtree-mail-icon-png-image_2921398.jpg"} right={"all mails"}/>
            <Sidebaritem left={"https://png.pngtree.com/png-vector/20210214/ourlarge/pngtree-mail-icon-png-image_2921398.jpg"} right={"Trash"}/>
            <Sidebaritem left={"https://png.pngtree.com/png-vector/20210214/ourlarge/pngtree-mail-icon-png-image_2921398.jpg"} right={"inbox"}/>
            <Sidebaritem left={"https://png.pngtree.com/png-vector/20210214/ourlarge/pngtree-mail-icon-png-image_2921398.jpg"} right={"Starred"}/>
            <Sidebaritem left={"https://png.pngtree.com/png-vector/20210214/ourlarge/pngtree-mail-icon-png-image_2921398.jpg"} right={"Draft"}/>
            <Sidebaritem left={"https://png.pngtree.com/png-vector/20210214/ourlarge/pngtree-mail-icon-png-image_2921398.jpg"} right={"Send mail"}/>
            <Sidebaritem left={"https://png.pngtree.com/png-vector/20210214/ourlarge/pngtree-mail-icon-png-image_2921398.jpg"} right={"all mails"}/>
            <Sidebaritem left={"https://png.pngtree.com/png-vector/20210214/ourlarge/pngtree-mail-icon-png-image_2921398.jpg"} right={"Trash"}/>
        </div>
    )
}
export default Sidebar