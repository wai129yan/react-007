import { use, useEffect, useState, useSyncExternalStore } from "react"
import type { PostType } from "../type/type"

export default function Hook2() {
    const [count, setCount] = useState(0)
    const [posts, setPosts] = useState<PostType[]>([])

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    console.log('posts', posts)

    useEffect(() => {
        fetchPosts(); //call fetch function

        //normal fetch
        // setLoading(true);
        // fetch("http://localhost:4000/posts")
        //     .then(res => res.json())
        //     .then(data => {
        //         setPosts(data)
        //         setLoading(false)
        //     })
        //     .catch(err => {
        //         setError(err.message)
        //         setLoading(false)
        //     })
    }, [])

    //counting useEffect
    useEffect(() => {
        console.log('count', count)
        //setCount(count + 1 )
        const counter = setInterval(() => {
            setCount(count + 1)
        }, 2000)

        return () => clearInterval(counter) //cleanup   
    }, [count])


    //fetch function
    const fetchPosts = () => {
        setLoading(true);
        fetch("http://localhost:4000/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }


    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <h2>Testing Hook</h2>
            <div>Count: {count}</div>
            {
                posts.map(post => (
                    <div key={post.id} className="mb-4 p-4 border border-gray-300 rounded">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}
