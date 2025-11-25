import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock, faCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Badge from "./Badge";

export default function Creator() {
  return (
    <Link href="/profile" className="card p-0 hover:border-primary/40 transition-colors duration-300 group">
      <div className="p-6">
        <div className="flex flex-col items-center">
          <img src="https://avatars.githubusercontent.com/u/196358235?v=4" className="w-24 portrait" />
          <h3 className="my-2 group-hover:text-primary transition-colors duration-300">PresidentTree94</h3>
          <div className="flex gap-2 text-xs font-semibold">
            <Badge role="code" />
          </div>
        </div>
        <p className="my-4">Possible description possible description possible description possible description.</p>
        <p className="flex items-center gap-2 text-xs"><FontAwesomeIcon icon={faLocationDot} className="!w-auto !h-3" />EST (UTC-5)</p>
        <div className="flex items-center gap-2 text-xs mt-3 mb-4">
          <FontAwesomeIcon icon={faClock} className="!w-auto !h-3 text-primary" />
          <b className="text-emphasis">Since 2025</b>
          <FontAwesomeIcon icon={faCircle} className="!w-auto !h-1" />
          <p>000 Followers</p>
        </div>
        <div className="text-xs font-semibold flex flex-wrap gap-2 text-emphasis">
          <p className="btn-sm skill">HTML</p>
          <p className="btn-sm skill">CSS</p>
          <p className="btn-sm skill">Tailwind</p>
          <p className="btn-sm skill">Javascript</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 border-t pale p-4 text-center">
        <span className="btn-md highlight">Available</span>
        <span className="btn-md pale border text-emphasis font-medium">View Profile</span>
      </div>
    </Link>
  );
}