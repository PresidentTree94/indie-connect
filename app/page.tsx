import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintbrush, faMusic, faPenNib } from "@fortawesome/free-solid-svg-icons";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="mt-16 px-8 py-20 max-w-7xl mx-auto flex flex-col gap-20">
      <section className="grid grid-cols-2 gap-12">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-7xl">Build cool stuff <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">together.</span></h1>
          <p className="text-xl">The digital platform for indie creators. Connect with coders, artists, musicians, and writers to bring your passion projects to life.</p>
          <div className="flex gap-4 text-base font-medium">
            <button className="btn-primary px-8 py-3 rounded-xl">Browse Projects</button>
            <button className="btn-outline px-8 py-3 rounded-xl">Create Profile</button>
          </div>
          <div className="mt-8 flex gap-8 items-center">
            <div className="flex -space-x-3">
              <img src="https://avatars.githubusercontent.com/u/196358235?v=4" className="w-10 portrait" />
              <img src="https://avatars.githubusercontent.com/u/196358235?v=4" className="w-10 portrait" />
              <img src="https://avatars.githubusercontent.com/u/196358235?v=4" className="w-10 portrait" />
              <img src="https://avatars.githubusercontent.com/u/196358235?v=4" className="w-10 portrait" />
            </div>
            <p><b className="text-emphasis">2,400+</b> creators joined this week</p>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden pale border">
          <img src="hero.png" className="w-full hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 flex-center text-emphasis p-8 pointer-events-none">
            <div className="grid grid-cols-2 gap-4 w-full max-w-112 font-bold font-display text-base">
              <div className="p-6 flex-center flex-col gap-3 pale border blurred">
                <FontAwesomeIcon icon={faCode} className="!w-auto !h-8 text-blue-400" />
                <span>Code</span>
              </div>
              <div className="p-6 flex-center flex-col gap-3 pale border blurred">
                <FontAwesomeIcon icon={faPaintbrush} className="!w-auto !h-8 text-pink-400" />
                <span>Art</span>
              </div>
              <div className="p-6 flex-center flex-col gap-3 pale border blurred">
                <FontAwesomeIcon icon={faMusic} className="!w-auto !h-8 text-yellow-400" />
                <span>Music</span>
              </div>
              <div className="p-6 flex-center flex-col gap-3 pale border blurred">
                <FontAwesomeIcon icon={faPenNib} className="!w-auto !h-8 text-purple-400" />
                <span>Writing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>How It Works</h2>
        <p className="text-base">Get started in four simple steps.</p>
        <div className="grid grid-cols-4 gap-6 mt-8">
          <div className="card hover:border-primary/40">
            <span className="w-10 h-10 highlight font-bold text-base flex-center">1</span>
            <h3 className="mt-4 mb-2">Discover</h3>
            <p>Find projects that match your skills and creative interests.</p>
          </div>
          <div className="card hover:border-primary/40">
            <span className="w-10 h-10 highlight font-bold text-base flex-center">2</span>
            <h3 className="mt-4 mb-2">Apply</h3>
            <p>Send your portfolio and connect with teams that need your talents.</p>
          </div>
          <div className="card hover:border-primary/40">
            <span className="w-10 h-10 highlight font-bold text-base flex-center">3</span>
            <h3 className="mt-4 mb-2">Connect</h3>
            <p>Get onboarded to the team's Discord and start collaborating.</p>
          </div>
          <div className="card hover:border-primary/40">
            <span className="w-10 h-10 highlight font-bold text-base flex-center">4</span>
            <h3 className="mt-4 mb-2">Create</h3>
            <p>Build something amazing together and ship your passion project.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex-center justify-between mb-8">
          <h2>Featured Opportunities</h2>
          <button className="btn-md btn-outline">View All</button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </section>
    </main>
  );
}
