import React,{  useState,useEffect} from "react";


function App(){

    const [value, setvalue] = useState(1)
    const [maxValue, setmaxValue] = useState(1000)

    
    const DecreaseCount = () => {
        if (value-1>=1){
            setvalue(value-1)
        }
        else{
            alert('minLimit Reached')
        }
        console.log('decrement',value)
    }

    const IncreaseCount = () => {
        if (value===''){
            setvalue(1)
        }
        else{
        if (value+1<=maxValue){
            
            setvalue(prevalue => prevalue+1)
        }
        else{
            alert('maxLimit Reached')
        }
        console.log('increment',value)
    }
    }

    const handleChange = (e) => {
        if (e.target.value){
        setvalue(parseInt(e.target.value))
        console.log(typeof(value),value)
        }
        else{
            setvalue('')
        }
    }   

    return(
        <div classNmae="container">
        <button className="b1"  onClick={() => {DecreaseCount()}}>-</button>
        <input className="v-input"  type="text" value={value} onChange={(e) => {return handleChange(e)}} />
        <button className="b2"  onClick={IncreaseCount}>+</button>
      </div>
    )
}

export default App;