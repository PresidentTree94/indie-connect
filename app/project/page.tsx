import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareNodes, faCalendar, faPlay, faUserGroup, faClock, faLink, faBullhorn, faMessage } from "@fortawesome/free-solid-svg-icons";
import Badge from "@/components/Badge";
import Skills from "@/components/Skills";

export default function Detail() {
  return (
    <>
      <div className="bg-white/50 h-80 relative">
        <img src="banner.png" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-linear-to-t from-background to-transparent"></div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-8 w-full flex-center justify-between gap-6 max-w-7xl">
          <div>
            <span className="uppercase font-semibold btn-primary btn-sm text-xs">Website</span>
            <h1 className="mt-2">Indie Connect</h1>
            <p className="text-lg mt-2 text-white/80">A website for indie creators to connect and build passion projects.</p>
          </div>
          <div className="flex gap-3">
            <button className="btn-primary font-bold btn-md px-8 flex items-center gap-2"><FontAwesomeIcon icon={faHeart} className="!w-auto !h-4" />Follow</button>
            <button className="btn-outline border-emphasis font-medium btn-md px-8 flex items-center gap-2 bg-card"><FontAwesomeIcon icon={faShareNodes} className="!w-auto !h-4" />Share</button>
          </div>
        </div>
      </div>
      <main className="px-8 pb-8 max-w-7xl mx-auto grid grid-cols-[2fr_1fr] gap-8">
        <section className="flex flex-col gap-8">
          <div className="card">
            <h3>About the Project</h3>
            <p className="text-base mt-6 mb-8">A NextJS application that gives indie creators the resources they need by allowing them to team up with fellow programmers, artists, musicians, and writers.</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="card p-4 bg-white/5 flex flex-col items-center">
                <FontAwesomeIcon icon={faCalendar} className="!w-auto !h-5 text-pink-400" />
                <span className="text-xs mt-2">Created</span>
                <p className="font-bold text-emphasis">Nov 19, 2025</p>
              </div>
              <div className="card p-4 bg-white/5 flex flex-col items-center">
                <FontAwesomeIcon icon={faPlay} className="!w-auto !h-5 text-purple-400" />
                <span className="text-xs mt-2">Status</span>
                <p className="font-bold text-emphasis">Active</p>
              </div>
              <div className="card p-4 bg-white/5 flex flex-col items-center">
                <FontAwesomeIcon icon={faUserGroup} className="!w-auto !h-5 text-blue-400" />
                <span className="text-xs mt-2">Team Size</span>
                <p className="font-bold text-emphasis">1</p>
              </div>
              <div className="card p-4 bg-white/5 flex flex-col items-center">
                <FontAwesomeIcon icon={faClock} className="!w-auto !h-5 text-yellow-400" />
                <span className="text-xs mt-2">Timeline</span>
                <p className="font-bold text-emphasis">Flexible</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2"><FontAwesomeIcon icon={faUserGroup} className="!w-auto !h-6 text-primary" />Open Roles</h2>
            <div className="card flex-center justify-between hover:border-primary/40 transition-colors group">
              <div>
                <div className="text-xs flex items-center gap-3">
                  <Badge role="code" />
                  <span className="flex items-center gap-1"><FontAwesomeIcon icon={faClock} className="!w-auto !h-3" />Schedule</span>
                </div>
                <h3 className="my-2 group-hover:text-primary transition-colors">Position</h3>
                <p>Skill? Type?</p>
              </div>
              <div className="text-right">
                <h3>0</h3>
                <p>SPOTS</p>
                <button className="btn-md btn-primary text-xs mt-2 font-medium">Apply</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2"><FontAwesomeIcon icon={faBullhorn} className="!w-auto !h-6 text-primary" />Recent Updates</h2>
            <div className="card p-4 flex items-start gap-3">
              <img src="https://avatars.githubusercontent.com/u/196358235?v=4" className="w-8 portrait" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-emphasis">PresidentTree94</span>
                  <span className="text-xs">Timestamp</span>
                </div>
                <p>A short update about the project...</p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-8">
          <div className="card flex flex-col gap-4">
            <h3>The Team</h3>
            <div className="flex items-center gap-3">
              <img src="https://avatars.githubusercontent.com/u/196358235?v=4" className="w-10 portrait" />
              <div>
                <p className="font-bold text-emphasis">PresidentTree94</p>
                <div className="text-xs mt-1 flex gap-2">
                  <span className="btn-sm bg-white/10">Creator</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src="https://avatars.githubusercontent.com/u/196358235?v=4" className="w-10 portrait" />
              <div>
                <p className="font-bold text-emphasis">PresidentTree94</p>
                <div className="text-xs mt-1 flex gap-2">
                  <span className="btn-sm bg-white/10">Creator</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src="https://avatars.githubusercontent.com/u/196358235?v=4" className="w-10 portrait" />
              <div>
                <p className="font-bold text-emphasis">PresidentTree94</p>
                <div className="text-xs mt-1 flex gap-2">
                  <span className="btn-sm bg-white/10">Creator</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h3>Tools & Tech</h3>
            <Skills />
          </div>
          <div className="card flex flex-col gap-3">
            <a href="https://github.com/PresidentTree94/indie-connect" className="btn-outline btn-md font-medium flex items-center gap-2"><FontAwesomeIcon icon={faLink} className="!w-auto !h-4" />GitHub</a>
          </div>
        </section>
        <section className="col-span-full">
          <div>
            <h2>Gallery</h2>
            <div className="columns-4 gap-4 mt-4 mb-8">
              <img src="project.png" className="rounded-xl mb-4" />
              <img src="banner.png" className="rounded-xl mb-4" />
              <img src="hero.png" className="rounded-xl mb-4" />
              <img src="project.png" className="rounded-xl mb-4" />
              <img src="banner.png" className="rounded-xl mb-4" />
              <img src="hero.png" className="rounded-xl mb-4" />
            </div>
          </div>
          <div>
            <h2 className="flex items-center gap-2"><FontAwesomeIcon icon={faMessage} className="!w-auto !h-6 text-primary" />Discussion</h2>
          </div>
        </section>
      </main>
    </>
  );
}