import type { sectionType } from "../type/type";

export default function Section({ section }: { section: sectionType[] }) {
    return (
        <>
            {
                section.map((sec) => (
                    <section id={sec.sectionID} className="min-h-[80vh] flex items-center flex-col justify-center p-20">
                        <div key={sec.id} className="mb-10">
                            <h2 className="text-3xl font-bold mb-10">{sec.title}</h2>
                            <p>{sec.description}</p>
                        </div>
                    </section>
                ))
            }
        </>
    )
}
