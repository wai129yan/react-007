import Header from "../component/Header"
import Section from "../component/Section"
import type { headerType, sectionType } from "../type/type"


export default function Home() {
    const header: headerType[] = [
        {
            title: "Welcome to my Portofolio",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aut deleniti debitis fugit illum harum ducimus iure corporis quibusdam maiores aspernatur eos iste ab officia natus necessitatibus, cupiditate sint cum. Facere soluta pariatur quibusdam neque iste explicabo eos et quas?",

        },
        {
            title: "Hello World",
            description: "Sources box မှာ + နှိပ် → Display Capture (macOS မှာ “Screen Capture” လို့ပေါ်နိုင်တယ်) → OK နှိပ်ပါ။Multiple monitor သုံးထားရင် → record ချင်တဲ့ Display/ Screen ကိုရွေးပါ။"

        }
    ]
    const section: sectionType[] = [
        {
            id: 1, sectionID: "About", title: "About Me", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sequi. Adipisci, beatae? Quisquam sint labore, magni minus accusantium soluta maxime."
        },
        {
            id: 2, sectionID: "", title: "My Project", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sequi. Adipisci, beatae? Quisquam sint labore, magni minus accusantium soluta maxime."
        }
    ]
    return (
        <div>
            <Header header={header} />
            <main>
                <Section section={section} />


                <section id="project" className="min-h-[80vh] flex items-center flex-col justify-center p-20">
                    <h2 className="text-3xl font-bold mb-10">My Project</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sequi. Adipisci, beatae? Quisquam sint labore, magni minus accusantium soluta maxime.</p>
                </section>
            </main>
        </div>
    )
}
