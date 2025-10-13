import { useState } from "react";

export default function Hook() {
    const [count, setCount] = useState<number>(0);

    const [show, setShow] = useState<boolean>(false);
    const [loading, setloading] = useState<boolean>(false);
    const [like, setlike] = useState<number>(0);

    const [name, setName] = useState<string>("");

    console.log('count : >> ', count);

    const handleClick = (a: number): void => {
        setCount(count + a);
        setCount(count + a);
        setCount(count + a);

        // setCount((prevCount) => prevCount + a);
        // setCount((prevCount) => prevCount + a);
        // setCount((prevCount) => prevCount + a);
    }
    const handleLikeClick = (): void => {
        setlike((prevlike) => prevlike + 1);
    }

    // const handleClick = (a: number) => {
    //     setCount(count + a);
    // }
    return (
        <div>
            {/* input */}
            <p>my name is {name.toUpperCase()}</p>
            <input className="border border-gray-300 px-2 py-2 rounded-2xl" type="text" placeholder="enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            {/* like button */}
            <br />
            <button className="bg-green-500 text-white px-2 py-2 rounded-2xl cursor-pointer" onClick={() => handleLikeClick()}> Like {(like > 0 ? `${like}` : "")}</button>
            {/* <h3>useState</h3>
            <p>Count: {count}</p> */}
            {/* <button className="bg-green-500 text-white px-2 py-2 rounded-2xl cursor-pointer" onClick={()=>handleClick(1)}>Increment</button>

                    <button className="mx-2 bg-red-500 text-white px-2 py-2 rounded-2xl cursor-pointer" onClick={()=>handleClick(-1)}>Decrement</button> */}
            {/* <button className="bg-green-500 text-white px-2 py-2 rounded-2xl cursor-pointer" onClick={() => handleClick(1)}>Increment</button>

            <button className="mx-2 bg-red-500 text-white px-2 py-2 rounded-2xl cursor-pointer" onClick={() => handleClick(-1)}>Decrement</button> */}

            {
                loading && <p>Loading ... </p>
            }
            {
                !loading && <>
                    <h3>useState</h3>
                    <p>Count: {count}</p>
                    <button className="bg-green-500 text-white px-2 py-2 rounded-2xl cursor-pointer" onClick={() => handleClick(1)}>Increment</button>

                    <button className="mx-2 bg-red-500 text-white px-2 py-2 rounded-2xl cursor-pointer" onClick={() => handleClick(-1)}>Decrement</button>
                </>
            }
            <h3>useState</h3>
            <button className="bg-green-500 text-white px-2 py-2 rounded-2xl cursor-pointer" onClickCapture={() => setloading(true)}>Start Loading</button>
            <button className="mx-2 bg-red-500 text-white px-2 py-2 rounded-2xl cursor-pointer" onClickCapture={() => setloading(false)}>Stop Loading</button>
            <div>
                {
                    show &&
                    <>
                        <h2 className="text-2xl font-bold text-gray-800">Lorem ipsum dolor sit</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisiong elit.</p>
                    </>
                }
            </div>
            <button className="bg-blue-500 text-white px-2 py-2 rounded-2xl cursor-pointer" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Toggle</button>
        </div>
    )
}
