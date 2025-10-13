import { Link } from "react-router"
import type { blogType } from "../type/type"

export default function Blog() {
    const blogArray: blogType[] = [
        { id: 1, title: "React", description: "This is React Description" },
        { id: 2, title: "JavaScript", description: "This is JavaScript Description" },
        { id: 3, title: "TypeScript", description: "This is TypeScript Description" },
    ]
    return (
        <div>
            {
                blogArray.map((blog) => (
                    <div key={blog.id} className="p-10 shadow-md mb-4">
                        <h2><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h2>
                        <p>{blog.description}</p>
                    </div>
                ))
            }
        </div>
    )
}
