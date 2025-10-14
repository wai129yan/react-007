import { useState } from "react";
import Hook from "../component/Hook";
import Hook2 from "../component/Hook2";


export default function About() {
    //state data
    const hello = useState("Hello About Page");
    console.log('hello : >> ', hello);
    const [data, setData] = useState("initial data");
    console.log('data : >> ', data);

    return (
        <>
            {/* <div>{data}</div> */}
            {/* <button onClick={() => setData("update data")}>update</button> */}
            <h2>Hooks</h2>
            <Hook />
            <Hook2 />
        </>

    )
}
