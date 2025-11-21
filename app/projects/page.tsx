import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintbrush, faMusic, faPenNib, faBolt, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Project from "@/components/Project";

export default function Projects() {
  return (
    <>
      <div>
        <h1>Browse Projects</h1>
        <p className="mt-2 text-lg">Find the perfect project to collaborate on</p>
      </div>
      <div className="pale bg-card flex gap-4 px-4 py-3 rounded-xl focus-within:border-primary">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="!w-auto !h-5" />
        <input type="text" className="w-full placeholder:text-basic text-emphasis outline-none" placeholder="Search by title, description, or tags..." />
      </div>
      <section className="border-y border-white/15 py-6">
        <p className="uppercase text-xs font-bold font-display">By role</p>
        <div className="flex gap-4 mt-2 mb-4">
          <button className="font-medium flex items-center gap-2 px-6 py-2 hover:bg-white/10 rounded-full"><FontAwesomeIcon icon={faBolt} className="!w-auto !h-4" />All Projects</button>
          <button className="font-medium flex items-center gap-2 px-6 py-2 hover:bg-white/10 rounded-full"><FontAwesomeIcon icon={faCode} className="!w-auto !h-4" />Code</button>
          <button className="font-medium flex items-center gap-2 px-6 py-2 hover:bg-white/10 rounded-full"><FontAwesomeIcon icon={faPaintbrush} className="!w-auto !h-4" />Art</button>
          <button className="font-medium flex items-center gap-2 px-6 py-2 hover:bg-white/10 rounded-full"><FontAwesomeIcon icon={faMusic} className="!w-auto !h-4" />Music</button>
          <button className="font-medium flex items-center gap-2 px-6 py-2 hover:bg-white/10 rounded-full"><FontAwesomeIcon icon={faPenNib} className="!w-auto !h-4" />Writing</button>
        </div>
        <p className="uppercase text-xs font-bold font-display">By type</p>
        <div className="flex gap-4 mt-2">
          <button className="font-medium gap-2 px-6 py-2 hover:bg-white/10 rounded-full">All Types</button>
          <button className="uppercase font-medium gap-2 px-6 py-2 hover:bg-white/10 rounded-full">Game</button>
          <button className="uppercase font-medium gap-2 px-6 py-2 hover:bg-white/10 rounded-full">App</button>
          <button className="uppercase font-medium gap-2 px-6 py-2 hover:bg-white/10 rounded-full">Story</button>
          <button className="uppercase font-medium gap-2 px-6 py-2 hover:bg-white/10 rounded-full">Artwork</button>
          <button className="uppercase font-medium gap-2 px-6 py-2 hover:bg-white/10 rounded-full">Music</button>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-6">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </section>
    </>
  );
}