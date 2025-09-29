import Nav from "./component/Nav";

export default function App() {
    const navItems = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About", link: "/about" },
        { id: 3, name: "Project", link: "/project" },
    ];
    return (
        <div>
            <Nav navItem={navItems} />

            <header>
                <div className="min-h-[80vh] flex flex-col justify-center items-center p-20">
                    <h1 className="text-4xl font-bold mb-10">Welcome to my Portofolio</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aut deleniti debitis fugit illum harum ducimus iure corporis quibusdam maiores aspernatur eos iste ab officia natus necessitatibus, cupiditate sint cum. Facere soluta pariatur quibusdam neque iste explicabo eos et quas?</p>
                </div>
            </header>
            <main>
                <section id="about" className="min-h-[80vh] flex items-center flex-col justify-center p-20">
                    <h2 className="text-3xl font-bold mb-10">About Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sequi. Adipisci, beatae? Quisquam sint labore, magni minus accusantium soluta maxime.</p>
                </section>
                <section id="project" className="min-h-[80vh] flex items-center flex-col justify-center p-20">
                    <h2 className="text-3xl font-bold mb-10">My Project</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sequi. Adipisci, beatae? Quisquam sint labore, magni minus accusantium soluta maxime.</p>
                </section>
            </main>
        </div>
    )
}
