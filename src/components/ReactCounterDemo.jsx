import { useState } from "react";

export default function ReactCounterDemo() {
    const [count, setCount] = useState(0);

    return (
        <div className="grid grid-cols-2 grid-rows-2 w-fit gap-1">
            <span className="col-span-2">You clicked {count} times!</span>

            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}