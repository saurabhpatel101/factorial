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
    <div id='factorials'>
       
    </div>
    <div className='task'>
        <label id='factHead'>Factorial Number </label><br />
        <input id='num' type="number" placeholder='enter' value={factInp} onChange={(e)=>setFactInp(e.target.value)} />
        <button onClick={(factInp)=>factorial(factInp)} id='submit'>submit</button>
    </div>
    <div>
        <h1>Result: {factorial({factInp})}</h1>
    </div>
    
    <div className='foot'><Link to="/"><button id='footer'>return to home</button></Link></div>
    </>

  )
}

export default Factorials