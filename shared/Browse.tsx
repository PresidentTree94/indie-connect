import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Browse({
  title, description, searchbar, criteria, cards
}: Readonly<{
  title: string;
  description: string;
  searchbar: string;
  criteria: React.ReactNode;
  cards: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <h1>Browse {title}</h1>
        <p className="mt-2 text-lg">{description}</p>
      </div>
      <div className="pale bg-card flex gap-4 px-4 py-3 rounded-xl focus-within:border-primary">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="!w-auto !h-5" />
        <input type="text" className="w-full placeholder:text-basic text-emphasis outline-none" placeholder={searchbar} />
      </div>
      <section className="border-y border-white/15 py-6">{criteria}</section>
      <section className="grid grid-cols-3 gap-6">{cards}</section>
    </>
  );
}