import { Route, Routes } from "react-router";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import LogIn from "./pages/LogIn";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import type { navLinkType } from "./type/type";


export default function App() {
    const navItems: navLinkType[] = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About", link: "/about" },
        { id: 3, name: "Project", link: "/project" },
        { id: 4, name: "Contact", link: "/contact" },

        { id: 6, name: "Blog", link: "/blog" },
    ];

    return (
        <div>
            {/* <Nav navItem={navItems} /> */}
            <Routes>
                <Route path="/" element={<Nav navItem={navItems} />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:blogid" element={<BlogDetail />} />
                </Route >
            </Routes>

        </div>
    )
}
