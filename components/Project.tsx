import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faHeart, faMessage } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  return (
    <Link href="/project" className="rounded-xl overflow-hidden bg-card pale hover:border-primary/40 group">
      <div className="relative h-48 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"/>
        <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4 flex gap-2 text-xs">
          <span className="py-0.5 px-2 text-emphasis font-semibold blurred">Role</span>
          <span className="py-0.5 px-2 text-emphasis font-semibold blurred">Role</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-xs">
          <span className="uppercase pale py-1 px-2 rounded-xl font-semibold">Project</span>
          <span className="flex gap-1 items-center"><FontAwesomeIcon icon={faUserGroup} className="!w-auto !h-3" />0 spots left</span>
        </div>
        <h3 className="mt-2 mb-6 group-hover:text-primary transition-colors">Project Title</h3>
        <p>Description goes here. Description goes here. Description goes here. Description goes here.</p>
        <div className="mt-4 flex gap-2 text-xs">
          <span className="px-2 py-1 bg-white/10 rounded-xl">#Tag</span>
          <span className="px-2 py-1 bg-white/10 rounded-xl">#Tag</span>
          <span className="px-2 py-1 bg-white/10 rounded-xl">#Tag</span>
        </div>
      </div>
      <div className="flex justify-between pt-4 px-6 pb-6 border-t border-white/15">
        <div className="flex -space-x-2">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" className="w-6 rounded-full bg-[rgb(48,48,54)] pale hover:scale-110 transition-transform"/>
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" className="w-6 rounded-full bg-[rgb(48,48,54)] pale hover:scale-110 transition-transform"/>
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" className="w-6 rounded-full bg-[rgb(48,48,54)] pale hover:scale-110 transition-transform"/>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-1 hover:text-primary transition-colors"><FontAwesomeIcon icon={faHeart} className="!w-auto !h-4" />00</button>
          <button className="flex items-center gap-1 hover:text-primary transition-color"><FontAwesomeIcon icon={faMessage} className="!w-auto !h-4" />00</button>
        </div>
      </div>
    </Link>
  );
}