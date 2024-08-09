import React from "react";

function Listlteam(props){

    
    return(
        <div  onClick={()=>{
            props.onChecked(props.id);
        }}>
            <li>{props.text} X
            </li>
        </div>
    );
}

export default Listlteam;