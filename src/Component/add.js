import React from 'react'
function Add({title,color}){
    var style = {
        backgroundColor: `${color}`,
        width:`250px`,
        height:`45px`,
        borderRadius:`20px`
    }
    return (
        <button style={style}>{title}</button>
    )
}
export default Add