import React,{useState} from 'react'
import './App.css'
import { Link } from 'react-router-dom';

const Factorials = () => {
    const [factInp,setFactInp]=useState(0);
    function factorial({factInp}) {
        if ( factInp=== 0) return 1;
        let f = 1;
        for (let i = 1; i < factInp; i++) {
            f = f * (i + 1);
        }
        return f;
      }
      console.log(factorial({factInp}))
  return (<>
    <div>Factorials
       
    </div>
    <div>
        <label id='factHead'>Factorial no.:</label><br />
        <input type="number" placeholder='enter' value={factInp} onChange={(e)=>setFactInp(e.target.value)} />
        <button onClick={(factInp)=>factorial(factInp)} >submit</button>
    </div>
    <div>
        <h1>Result: {factorial({factInp})}</h1>
    </div>
    <Link to="/"><button>return to home</button></Link>
    </>

  )
}

export default Factorials