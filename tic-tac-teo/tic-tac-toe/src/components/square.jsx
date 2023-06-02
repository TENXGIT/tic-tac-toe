import React from 'react';

const Square=(props)=>{
    return(
        <div onClick={props.onClick} style={{border:"1px solid",height:"200px",display:'flex',width:"50%",alignItems:"center",justifyContent:'center'}}><h5>{props.value}</h5></div>
    )
}
export default Square