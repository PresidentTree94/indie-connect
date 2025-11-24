import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintbrush, faMusic, faPenNib } from "@fortawesome/free-solid-svg-icons";
import Browse from "@/shared/Browse";
import Creator from "@/components/Creator";

export default function Creators() {
  return (
    <Browse
      title="Creators"
      description="Discover talented collaborators to bring your projects to life"
      searchbar="Search by name or skills..."
      criteria={<>
        <p className="sorted">Sort by</p>
        <div className="flex gap-4 mt-2 mb-4">
          <button className="criterion">Newest</button>
          <button className="criterion">Oldest</button>
          <button className="criterion">Most Followers</button>
          <button className="criterion">Least Followers</button>
        </div>
        <p className="sorted">By specialty</p>
        <div className="flex gap-4 mt-2 mb-4">
          <button className="criterion">All Projects</button>
          <button className="flex items-center gap-2 criterion"><FontAwesomeIcon icon={faCode} className="!w-auto !h-4" />Code</button>
          <button className="flex items-center gap-2 criterion"><FontAwesomeIcon icon={faPaintbrush} className="!w-auto !h-4" />Art</button>
          <button className="flex items-center gap-2 criterion"><FontAwesomeIcon icon={faMusic} className="!w-auto !h-4" />Music</button>
          <button className="flex items-center gap-2 criterion"><FontAwesomeIcon icon={faPenNib} className="!w-auto !h-4" />Writing</button>
        </div>
        <p className="sorted">By timezone</p>
        <div className="flex gap-4 mt-2 mb-4">
          <button className="criterion">All Timezones</button>
          <button className="criterion">EST (UTC-5)</button>
        </div>
        <p className="sorted">By availability</p>
        <div className="flex gap-4 mt-2 mb-4">
          <button className="criterion">All Availabilities</button>
          <button className="criterion">Available</button>
          <button className="criterion">Unavailable</button>
        </div>
      </>}
      cards={<>
        <Creator />
        <Creator />
        <Creator />
        <Creator />
        <Creator />
        <Creator />
      </>}
    />
  );
}