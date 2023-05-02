import React, { useEffect,useState } from 'react'

const User = () => {

    const [data, setData] = useState(10);
    const[count, setCount] = useState(100);

    useEffect(() => {
        console.log("called with data state")
    },[data])

    useEffect(() => {
        alert("Count is " + count)
    },[count])


  return (
    <div className='App'>
      <h1 style={{color: "#f85f00"}}>useEffect with Specific State</h1>

        <h1>Count : {count}</h1>
        <h1>Data : {data}</h1>

        <button onClick={()=>setCount(count+1)}>Updata Count</button>
        <button onClick={()=>setData(data+1)}>Updata Data</button>
    </div>
  )
}

export default User;