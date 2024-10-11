import {useState} from "react";
let num =2;
function App() {

  //estado
  const [num,setNum] = useState(1);//setNum es lo que nos permite actualizar la variable
  const sumar = () =>{             //siempre es el nombre de la variable y despues set y el nombre de la variable
    setNum(num+1);
  }
  return (
    <div className = "App">
      <button onClick = {sumar}>+1</button>    
      <p>{num}</p>
    </div>
  )
}

export default App
