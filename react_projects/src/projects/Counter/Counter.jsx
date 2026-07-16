import { useState } from 'react';
import './Counter.css';
function Counter(){

    useEffect(()=>{
        document.title = "Counter"
    }, []);
    
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    function reset(){
        setCount(0);
    }

    return(
        <>
            <div className='ctn'>
                <p>{count}</p>
                <div className="btns">
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={reset}>Reset</button>
                </div>
                
            </div>
        </>
    );

}

export default Counter