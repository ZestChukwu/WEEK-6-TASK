import './App.css';
import React from 'react';

function Calculator() {
          function calculate() {
            const num1 = parseInt(document.getElementById("num1").value);
            const num2 = parseInt(document.getElementById("num2").value);
            const operator = document.getElementById ('operator').value;
            let result = 0;

           switch (operator) { 
           case "+": 
              result = num1 + num2;
              break;
            case "-": 
              result = num1 - num2;
              break;
            case "*": 
              result = num1 * num2;
              break;
            case "/": 
               result = num2 !== 0 ? num1 / num2 :"Can't divide by zero" 
              break;
            default: 
              result ='Invalid Operation'
          }

          document.getElementById("result").innerText = 'Result:' + result;
}
  return (
          <div style={{ padding: '20px', border: '8px solid black', width: '300px', background: 'lavender' } }
           className='App'> 
            <h1> Simple Calculator</h1>
            <input type="number" id="num1" placeholder="Enter First Number" style={{
                         width: '100%', marginBottom:'10px' }}/>
                        <select id="operator" style={{ width:'100%', marginBottom: '10px' }}>
                                  <option value="+">Add</option>
                                  <option value="-">Subtract</option>
                                  <option value="*">Multiply</option>
                                  <option value="/">Divide</option>
                        </select>
           <input type="number" id="num2" placeholder="Enter Second Number" style={{
                         width: '100%', marginBottom:'10px' }}/>
             <button onClick={calculate} style={{ width:'100%', padding: '10px',marginButtom:'10px' }}>
                      Calculate
             </button>
             <p id="result" style={{ fontWeight: 'bold', fontSize: '16px'}}>Result:</p>
          </div>
          );
}

export default Calculator;