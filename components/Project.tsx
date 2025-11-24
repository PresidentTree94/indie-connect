import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMessage } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  return (
    <Link href="/project" className="card p-0 hover:border-primary/40 transition-colors duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img src="project.png" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"/>
        <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4 flex gap-2 text-xs">
          <span className="py-0.5 px-2 text-emphasis font-semibold blurred">Role</span>
          <span className="py-0.5 px-2 text-emphasis font-semibold blurred">Role</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex-center justify-between text-xs">
          <span className="uppercase pale border btn-sm font-semibold">Project</span>
          <span className="uppercase pale border btn-sm font-semibold">Status</span>
        </div>
        <h3 className="mt-2 mb-6 group-hover:text-primary transition-colors duration-300">Project Title</h3>
        <p>Description goes here. Description goes here. Description goes here. Description goes here.</p>
        <div className="mt-4 flex gap-2 text-xs">
          <span className="btn-sm bg-white/10">#Tag</span>
          <span className="btn-sm bg-white/10">#Tag</span>
          <span className="btn-sm bg-white/10">#Tag</span>
        </div>
      </div>
      <div className="flex-center justify-between pt-4 px-6 pb-6 border-t pale">
        <div>
          <div className="flex -space-x-2">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" className="w-7 portrait hover:scale-110 transition-transform"/>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" className="w-7 portrait hover:scale-110 transition-transform"/>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" className="w-7 portrait hover:scale-110 transition-transform"/>
          </div>
          <span className="text-xs mt-1">Created XXX XX, XXXX</span>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-1 hover:text-primary transition-colors"><FontAwesomeIcon icon={faHeart} className="!w-auto !h-4" />00</button>
          <button className="flex items-center gap-1 hover:text-primary transition-color"><FontAwesomeIcon icon={faMessage} className="!w-auto !h-4" />00</button>
        </div>
      </div>
    </Link>
  );
}