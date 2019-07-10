import React, {useState, useEffect} from 'react';
function Hooks() {
    const [ count, setCount ] = useState(0);
    useEffect(() => {
        document.title =  `click ${count} times`
    })
    return (
        <div>
            <p>you clicked {count} times</p>
            <button
                onClick={() => setCount(count + 1)}
            >click me</button>
        </div>
    )
}

export default Hooks;