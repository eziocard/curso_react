import {useState} from "react";
let num =2;
function App() {

  //estado
  const [num,setNum] = useState(1);
  const sumar = () =>{
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
