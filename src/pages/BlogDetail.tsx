import { useNavigate, useParams } from "react-router"

export default function BlogDetail() {
    const params = useParams();
    console.log('params', params);
    const { blogid } = useParams(); //destructuring from route
    console.log('blogs : >>', blogid);
    const navigate = useNavigate();
    return (
        <>
            <div>
                BlogDetail{blogid}
            </div>
            <a href="/blog" className="text-blue-500 font-blod px-2 py-2 border border-blue-500 rounded">Blog Page</a>
            <button onClick={() => navigate(-1)} className="text-red-500 font-blod px-2 py-1 border border-red-500 rounded">Go back</button>
        </>
    )
}
