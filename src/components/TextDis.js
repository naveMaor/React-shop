import { useState } from "react";

export default function TextDis() {
    const [count, setCount] = useState(0);

    return (
        <div>
            {count % 2 < 1 ? <h2>yaeli</h2> : ""}
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                dont kill me
            </button>
        </div>
    );
}