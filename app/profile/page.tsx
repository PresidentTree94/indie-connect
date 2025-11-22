import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faUserPlus, faLink, faBolt, faCodeFork, faClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  return (
    <article className="flex gap-8">
      <section className="w-64">
        <div className="card flex flex-col items-center mb-8">
          <img src="https://avatars.githubusercontent.com/u/196358235?v=4" className="w-30 rounded-full bg-[rgb(48,48,54)] pale mb-4" />
          <h3>PresidentTree94</h3>
          <div className="mt-3 mb-6 flex gap-2 text-xs font-semibold">
            <span className="py-1 px-2 rounded-xl border border-blue-400/30 text-blue-400 bg-blue-400/10">Code</span>
          </div>
          <div className="flex gap-2 text-xs font-semibold mb-6">
            <span className="py-1 px-2 rounded-xl bg-primary/20 text-primary">Available</span>
            <span className="py-1 px-2 rounded-xl pale uppercase text-emphasis">EST (UTC-5)</span>
          </div>
          <div className="flex gap-2">
            <a className="text-emphasis hover:text-primary"><FontAwesomeIcon icon={faLink} className="!w-auto !h-4" /></a>
            <a className="text-emphasis hover:text-primary"><FontAwesomeIcon icon={faLink} className="!w-auto !h-4" /></a>
            <a className="text-emphasis hover:text-primary"><FontAwesomeIcon icon={faLink} className="!w-auto !h-4" /></a>
            <a className="text-emphasis hover:text-primary"><FontAwesomeIcon icon={faLink} className="!w-auto !h-4" /></a>
          </div>
          <div className="w-full border-t border-white/15 pt-6 flex flex-col gap-2 mt-6">
            <button className="bg-primary text-background py-2 px-4 rounded-xl font-bold flex items-center gap-2 justify-center"><FontAwesomeIcon icon={faHeart} className="!w-auto !h-4" />Follow</button>
            <button className="border border-emphasis py-2 px-4 rounded-xl text-emphasis font-bold flex items-center gap-2 justify-center hover:bg-white/10"><FontAwesomeIcon icon={faComment} className="!w-auto !h-4" />Message</button>
            <button className="border border-emphasis py-2 px-4 rounded-xl text-emphasis font-bold flex items-center gap-2 justify-center hover:bg-white/10"><FontAwesomeIcon icon={faUserPlus} className="!w-auto !h-4" />Invite</button>
          </div>
        </div>
        <div className="card">
          <h3>Tools & Tech</h3>
          <div className="text-xs font-semibold flex flex-wrap gap-2 mt-6">
            <p className="py-1 px-2 pale rounded-xl bg-background hover:bg-white/5">HTML</p>
            <p className="py-1 px-2 pale rounded-xl bg-background hover:bg-white/5">CSS</p>
            <p className="py-1 px-2 pale rounded-xl bg-background hover:bg-white/5">Tailwind</p>
            <p className="py-1 px-2 pale rounded-xl bg-background hover:bg-white/5">Javascript</p>
            <p className="py-1 px-2 pale rounded-xl bg-background hover:bg-white/5">Typescript</p>
            <p className="py-1 px-2 pale rounded-xl bg-background hover:bg-white/5">ReactJS</p>
            <p className="py-1 px-2 pale rounded-xl bg-background hover:bg-white/5">NextJS</p>
            <p className="py-1 px-2 pale rounded-xl bg-background hover:bg-white/5">Vercel</p>
          </div>
        </div>
      </section>
      <section className="flex-1">
        <div className="grid grid-cols-4 gap-4 uppercase">
          <div className="card flex flex-col items-center hover:border-primary/40">
            <FontAwesomeIcon icon={faBolt} className="!w-auto !h-5 mb-2 text-primary" />
            <h3>00</h3>
            <p>Projects</p>
          </div>
          <div className="card flex flex-col items-center hover:border-primary/40">
            <FontAwesomeIcon icon={faCodeFork} className="!w-auto !h-5 mb-2 text-primary" />
            <h3>00</h3>
            <p>Collabs</p>
          </div>
          <div className="card flex flex-col items-center hover:border-primary/40">
            <FontAwesomeIcon icon={faClock} className="!w-auto !h-5 mb-2 text-primary" />
            <h3>2025</h3>
            <p>Active Since</p>
          </div>
          <div className="card flex flex-col items-center hover:border-primary/40">
            <FontAwesomeIcon icon={faUserGroup} className="!w-auto !h-5 mb-2 text-primary" />
            <h3>000</h3>
            <p>Followers</p>
          </div>
        </div>
        <div className="bg-card pale my-8 rounded-xl grid grid-cols-5 p-1 font-medium">
          <button className="py-1 rounded-xl hover:bg-background hover:text-emphasis">Portfolio</button>
          <button className="py-1 rounded-xl hover:bg-background hover:text-emphasis">Saved</button>
          <button className="py-1 rounded-xl hover:bg-background hover:text-emphasis">Following</button>
          <button className="py-1 rounded-xl hover:bg-background hover:text-emphasis">Applied</button>
          <button className="py-1 rounded-xl hover:bg-background hover:text-emphasis">About</button>
        </div>
        <div className="pale">Content</div>
      </section>
    </article>
  );
}