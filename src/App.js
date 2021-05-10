import React, { useState } from  'react'


function App() {
    const [ number1, setNumber1] = useState();
    const [ number2, setNumber2] = useState();
    const [ number, setText] = useState();
    const [ total, setTotal] = useState();

    function calTot() {
        //alert(number);
        
       switch(number) {
            case '1':
                return setTotal(number1+number2);
                case '2':
                    return setTotal(number1-number2);
                    case '3':
                        return setTotal(number1*number2);
                        case '4':
                            return setTotal(number1%number2);
                            default:
                            return setTotal('Error'); 
        }
       // setTotal(number1+number2);
    }

    

    

    return (
        <div>
            <h1 className="input">CALCULATOR</h1>
            <div className="input1">
                
                <input 
                 type="number"
                 value={number1}
                 onChange={e => setNumber1(+e.target.value)}
                 placeholder={0}
                 />
                 </div>

        
        <div className="inp">
            Press : <br></br>
            1 for + <br></br>
            2 for - <br></br>
            3 for * <br></br>
            4 for /<br></br>
            else Error<br></br>
        </div>
                 <div className="input1">
                     <input 
                     type="number"
                     value={number}
                     onChange={e => setText(e.target.value)}
                   placeholder="Enter Command"
                     />
                 </div>

                 <div className="input1">
                 <input 
                 type="number"
                 value={number2}
                 onChange={e => setNumber2(+e.target.value)}
                 placeholder={0}
                 />
                 

            </div>
       <div className="input1"><button onClick={calTot}>Click Me!!!</button></div>
       
        <h1 className="input1">{total}</h1>
            
        </div>
    )
}

export default App