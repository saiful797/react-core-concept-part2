import { useState } from "react"

export default function Counter(){
    const [count, seatCount] = useState(0);

    const handleAdd = () =>{
        const newCount = count + 1;
        seatCount(newCount);
    }

    const handleReduce = () =>{
        if(count === 0){
            alert('Reduce does not work now!!');
            return seatCount(0);
        }
        const newCount = count -1;
        seatCount(newCount);
    }

    return (
        <div style={{border: '2px solid yellow', }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}