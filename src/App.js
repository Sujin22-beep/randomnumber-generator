import { useState } from "react"
import "./App.css"
function App(){
  const [randomnumber,setrandomnumber]=useState("")
  const generatenumber = () => {
    const num = Math.floor(Math.random()*100)+1
    setrandomnumber(num)
  }
  return(<div className="box">
    <h2 className="heading">RANDOM NUMBER GENERATOR</h2>

    {randomnumber===""?(<h3>Number not yet generated</h3>):(<h3 className="number">{randomnumber}</h3>)}
    <button onClick={generatenumber} className="btn">Generate</button>
  </div>)
}

export default App