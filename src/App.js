 import React, { useState } from 'react'
 import "./App.css";
import { clear } from '@testing-library/user-event/dist/clear';
 
 const App = ()=>{
    const [ result , setResult ] =useState("")
    const handClick=(e)=>{
        setResult(result.concat(e.target.name)); 
    }
    const backspace = () => {
       setResult(result.slice(0, -1)); 

    }
    const clear = () =>{
        setResult("");
    }
    const calculate = ()=> {
        try{
          setResult(eval(result).toString());  
        }
        catch(err){
            setResult("Error")

        }
        

    }
   return (
     <>
       <div className='container'>
        <div className='header'> 
           <h3> calc </h3> 
            <div className='theme'>
              <h4>THEME</h4> 
               <div className='input'> 
                 <div className='num'> <p>1</p> <p>2</p> <p>3</p> </div><input type='range' max='2' />
                </div>
            </div>
           </div>
          <form>
            <input type='text' value={result}/>
          </form>
          <div className='keypad'>
            
            <button name ="7" onClick={handClick}>7</button>
            <button name ="8" onClick={handClick}>8</button> 
            <button name ="9" onClick={handClick}>9</button>
            <button onClick={backspace} id="backspace">DEL</button>

            <button name ="4" onClick={handClick}>4</button>
            <button name ="5" onClick={handClick}>5</button>
            <button name ="6" onClick={handClick}>6</button>
            <button name ="+" onClick={handClick}>+</button>

            <button name ="1" onClick={handClick}>1</button>
            <button name ="2" onClick={handClick}>2</button>
            <button name ="3" onClick={handClick}>3</button>
            <button name ="-" onClick={handClick}>&ndash;</button>

            <button name="." onClick={handClick}>.</button>
            <button name ="0" onClick={handClick}>0</button>
            <button name ="/" onClick={handClick}>&divide;</button>
            <button name ="*" onClick={handClick}>&times;</button>

            <button   onClick={clear} id="clear">RESET</button>
            <button   onClick={calculate} id ="result">=</button>

          </div>
       </div>
       
     </>
   )
 }
 
 export default App;