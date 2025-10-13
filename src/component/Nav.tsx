import { Outlet } from "react-router";
import type { navType } from "../type/type";


export default function Nav({ navItem }: { navItem: navType[] }) {
    console.log(navItem);
    return (
        <>
            <nav className="flex items-center justify-center h-[100px] bg-amber-100 ">
                <ul className="flex items-center justigy-center gap-[50px]">
                    {
                        navItem.map((item) => (
                            <li key={item.id}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))
                    }

                </ul>
            </nav>
            <Outlet />
        </>
    )
}
