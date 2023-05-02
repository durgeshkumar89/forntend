import './App.css';
import React,{useState,useEffect} from 'react';
import User from './User';

function App() {
 
     const [data, setData] = useState("Durgesh")
     const [count, setCount] = useState(0)

     useEffect(() => {
      console.log("useEffect")
     })

  return ( 
  
  <>
    <User/>
    <div className='App'>
      <hr/>
      <h1 style={{color: "#f85f00"}}>Hooks in React Js useState</h1>
      <h2>{data}!</h2>
      <button onClick={()=>setData("Dk upadhyay")}>Update data</button>
      <hr/>

     
      <h1 style={{color: "#f85f00"}}>useEffect in React{count} </h1> 
       <button onClick={()=>setCount (count + 1)}>Update Counter</button>
    </div>
    </>
  );
}

export default App;
