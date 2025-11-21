import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintbrush, faMusic, faPenNib } from "@fortawesome/free-solid-svg-icons";
import Step from "@/components/Step";
import Project from "@/components/Project";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 gap-12">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-7xl">Build cool stuff <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">together.</span></h1>
          <p className="text-xl">The digital platform for indie creators. Connect with coders, artists, musicians, and writers to bring your passion projects to life.</p>
          <div className="flex gap-4">
            <button className="bg-primary text-base font-medium text-background px-8 py-3 rounded-xl">Browse Projects</button>
            <button className="text-base font-medium text-emphasis px-8 py-3 pale rounded-xl hover:bg-white/10">Create Profile</button>
          </div>
          <div className="mt-8 flex gap-8 items-center">
            <div className="flex -space-x-3">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" className="w-10 rounded-full border-background border-2 bg-[rgb(48,48,54)]"/>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" className="w-10 rounded-full border-background border-2 bg-[rgb(48,48,54)]" />
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" className="w-10 rounded-full border-background border-2 bg-[rgb(48,48,54)]" />
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" className="w-10 rounded-full border-background border-2 bg-[rgb(48,48,54)]" />
            </div>
            <p><b className="text-emphasis">2,400+</b> creators joined this week</p>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden pale">
          <img src="https://1f4f30d6-9a3a-4b84-a6e9-5a3836a4ee2c-00-2b6nnaqu6i6rw.riker.replit.dev/@fs/home/runner/workspace/attached_assets/generated_images/3D_voxel_art_creative_tools_composition_45731bc9.png" className="w-full hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 flex justify-center items-center text-emphasis p-8 pointer-events-none">
            <div className="grid grid-cols-2 gap-4 w-full max-w-112 font-bold font-display text-base">
              <div className="p-6 flex flex-col justify-center items-center gap-3 pale blurred">
                <FontAwesomeIcon icon={faCode} className="!w-auto !h-8 text-blue-400" />
                <span>Code</span>
              </div>
              <div className="p-6 flex flex-col justify-center items-center gap-3 pale blurred">
                <FontAwesomeIcon icon={faPaintbrush} className="!w-auto !h-8 text-pink-400" />
                <span>Art</span>
              </div>
              <div className="p-6 flex flex-col justify-center items-center gap-3 pale blurred">
                <FontAwesomeIcon icon={faMusic} className="!w-auto !h-8 text-yellow-400" />
                <span>Music</span>
              </div>
              <div className="p-6 flex flex-col justify-center items-center gap-3 pale blurred">
                <FontAwesomeIcon icon={faPenNib} className="!w-auto !h-8 text-green-400" />
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
          <Step
            number="1" title="Browse"
            description="Explore projects by role and type to find what excites you."
          />
          <Step
            number="2" title="Apply"
            description="Send your portfolio and tell the team why you're interested."
          />
          <Step
            number="3" title="Connect"
            description="Get onboarded to the team's Discord and start collaborating."
          />
          <Step
            number="4" title="Create"
            description="Build something amazing together and ship your passion project."
          />
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2>Featured Opportunities</h2>
          <button className="px-4 py-2 rounded-xl">View All</button>
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
    </>
  );
}
