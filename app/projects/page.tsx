import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintbrush, faMusic, faPenNib } from "@fortawesome/free-solid-svg-icons";
import Browse from "@/shared/Browse";
import Project from "@/components/Project";

export default function Projects() {
  return (
    <Browse
      title="Projects"
      description="Find the perfect project to collaborate on"
      searchbar="Search by title, description, or tags..."
      criteria={<>
        <p className="sorted">Sort by</p>
        <div className="flex gap-4 mt-2 mb-4">
          <button className="criterion">Newest</button>
          <button className="criterion">Oldest</button>
          <button className="criterion">Most Likes</button>
          <button className="criterion">Least Likes</button>
        </div>
        <p className="sorted">By role</p>
        <div className="flex gap-4 mt-2 mb-4">
          <button className="criterion">All Projects</button>
          <button className="flex items-center gap-2 criterion"><FontAwesomeIcon icon={faCode} className="!w-auto !h-4" />Code</button>
          <button className="flex items-center gap-2 criterion"><FontAwesomeIcon icon={faPaintbrush} className="!w-auto !h-4" />Art</button>
          <button className="flex items-center gap-2 criterion"><FontAwesomeIcon icon={faMusic} className="!w-auto !h-4" />Music</button>
          <button className="flex items-center gap-2 criterion"><FontAwesomeIcon icon={faPenNib} className="!w-auto !h-4" />Writing</button>
        </div>
        <p className="sorted">By type</p>
        <div className="flex gap-4 mt-2 mb-4">
          <button className="criterion">All Types</button>
          <button className="uppercase criterion">Game</button>
          <button className="uppercase criterion">App</button>
          <button className="uppercase criterion">Website</button>
          <button className="uppercase criterion">Story</button>
          <button className="uppercase criterion">Artwork</button>
          <button className="uppercase criterion">Music</button>
        </div>
        <p className="sorted">By status</p>
        <div className="flex gap-4 mt-2">
          <button className="criterion">All Statuses</button>
          <button className="uppercase criterion">Active</button>
          <button className="uppercase criterion">Suspended</button>
          <button className="uppercase criterion">Completed</button>
        </div>
      </>}
      cards={<>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </>}
    />
  );
}