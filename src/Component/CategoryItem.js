function CategoryItem({
    url,
    title
}){
    return (
        <div>
            <img src={url}/>
            <div>
                 {title}
            </div>
        </div>
    )
}
export default CategoryItem