import React, { useState } from "react";
import Inputs from "./Component/Inputs";
import Listlteam from "./Component/ListIteam";

function App() {
  
  const [iteams,setIteams]   = useState([]);

  
  function AddTeam(inputText){
    setIteams(prevValue=>{
      return [...prevValue,inputText]
    });
  
  }
  function DeleteIteam(id){
    setIteams(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Inputs
        addOn={AddTeam }
      />
        <div>
          <ul>
            {iteams.map( (todoIteam,index) =>(
              <Listlteam 
              key={index}
              id={index}
              text={todoIteam}
              onChecked={DeleteIteam}
              
              />
            ))}
          </ul>
      
      </div>
    </div>
  );
}

export default App;
