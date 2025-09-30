import type { headerType } from "../type/type";
import Button from "./Button";

export default function Header({ header }: { header: headerType[] }) {
    console.log(header)
    return (

        <>
            <header>
                <div className="min-h-[80vh] flex flex-col justify-center items-center p-20">
                    {/* <h1 className="text-4xl font-bold mb-10">{header.title}</h1>
                    <p>{header.description}</p> */}
                    {header.map((head, index) => (
                        <div key={index} className="mb-10">
                            <h1 className="text-4xl font-bold mb-10">{head.title}.{index}</h1>
                            <p>{head.description}</p>
                        </div>
                    ))
                    }
                    <Button>
                        Click Me
                    </Button>
                    <Button>
                        Submit
                    </Button>
                </div>
            </header>

        </>
    )
}
