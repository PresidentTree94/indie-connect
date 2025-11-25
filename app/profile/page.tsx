import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faUserPlus, faLink, faBolt, faCodeFork, faClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Badge from "@/components/Badge";
import Skills from "@/components/Skills";

export default function Profile() {
  return (
    <>
      <div className="h-64 relative">
        <img src="banner.png" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-linear-to-t from-background to-transparent"></div>
      </div>
      <main className="px-8 pb-8 max-w-7xl mx-auto flex gap-8">
        <section className="w-64">
          <div className="card flex flex-col items-center mb-8">
            <img src="https://avatars.githubusercontent.com/u/196358235?v=4" className="w-30 portrait mb-4" />
            <h3>PresidentTree94</h3>
            <div className="mt-3 mb-6 flex gap-2 text-xs font-semibold">
              <Badge role="code" />
            </div>
            <div className="flex items-center gap-2 text-xs mb-6">
              <span className="btn-sm highlight">Available</span>
              <span className="btn-sm pale border uppercase text-emphasis font-semibold">EST (UTC-5)</span>
            </div>
            <div className="flex gap-2">
              <a className="text-emphasis hover:text-primary"><FontAwesomeIcon icon={faLink} className="!w-auto !h-4" /></a>
              <a className="text-emphasis hover:text-primary"><FontAwesomeIcon icon={faLink} className="!w-auto !h-4" /></a>
              <a className="text-emphasis hover:text-primary"><FontAwesomeIcon icon={faLink} className="!w-auto !h-4" /></a>
              <a className="text-emphasis hover:text-primary"><FontAwesomeIcon icon={faLink} className="!w-auto !h-4" /></a>
            </div>
            <div className="w-full border-t pale pt-6 flex flex-col gap-2 mt-6">
              <button className="btn-primary btn-md font-bold flex-center gap-2"><FontAwesomeIcon icon={faHeart} className="!w-auto !h-4" />Follow</button>
              <button className="btn-outline border-emphasis btn-md font-bold flex-center gap-2"><FontAwesomeIcon icon={faComment} className="!w-auto !h-4" />Message</button>
              <button className="btn-outline border-emphasis btn-md font-bold flex-center gap-2"><FontAwesomeIcon icon={faUserPlus} className="!w-auto !h-4" />Invite</button>
            </div>
          </div>
          <div className="card">
            <h3>Tools & Tech</h3>
            <Skills />
          </div>
        </section>
        <section className="flex-1">
          <div className="grid grid-cols-4 gap-4 uppercase">
            <div className="card flex flex-col items-center hover:border-primary/40 transition-colors">
              <FontAwesomeIcon icon={faBolt} className="!w-auto !h-5 mb-2 text-primary" />
              <h3>00</h3>
              <p>Projects</p>
            </div>
            <div className="card flex flex-col items-center hover:border-primary/40 transition-colors">
              <FontAwesomeIcon icon={faCodeFork} className="!w-auto !h-5 mb-2 text-primary" />
              <h3>00</h3>
              <p>Collabs</p>
            </div>
            <div className="card flex flex-col items-center hover:border-primary/40 transition-colors">
              <FontAwesomeIcon icon={faClock} className="!w-auto !h-5 mb-2 text-primary" />
              <h3>2025</h3>
              <p>Active Since</p>
            </div>
            <div className="card flex flex-col items-center hover:border-primary/40 transition-colors">
              <FontAwesomeIcon icon={faUserGroup} className="!w-auto !h-5 mb-2 text-primary" />
              <h3>000</h3>
              <p>Followers</p>
            </div>
          </div>
          <div className="card p-1 my-8 grid grid-cols-5 font-medium">
            <button className="py-1 rounded-xl hover:bg-background hover:text-emphasis">Portfolio</button>
            <button className="py-1 rounded-xl hover:bg-background hover:text-emphasis">Saved</button>
            <button className="py-1 rounded-xl hover:bg-background hover:text-emphasis">Following</button>
            <button className="py-1 rounded-xl hover:bg-background hover:text-emphasis">Applied</button>
            <button className="py-1 rounded-xl hover:bg-background hover:text-emphasis">About</button>
          </div>
          <div className="pale">Content</div>
        </section>
      </main>
    </>
  );
}