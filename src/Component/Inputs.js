import React, { useState } from "react";


function Inputs(props){
    const [inputText,setInputText] = useState("");

    function handleChange(event){
        const newVal = event.target.value
        console.log(newVal);
        setInputText(newVal);
      }
    return(
        <div>
            <div className="form">
        <input onChange={handleChange} type="text" placeholder="" value={inputText}/>
        <button onClick={()=>{
            props.addOn(inputText);
            setInputText("");
        }}>
          <span>Add</span>
        </button>
        </div>
        </div>
    );
}

export default Inputs;