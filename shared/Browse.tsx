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
    <main className="mt-16 px-8 py-20 max-w-7xl mx-auto flex flex-col gap-20">
      <div>
        <h1>Browse {title}</h1>
        <p className="mt-2 text-lg">{description}</p>
      </div>
      <div className="card flex gap-4 px-4 py-3 focus-within:border-primary">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="!w-auto !h-5" />
        <input type="text" className="w-full placeholder:text-basic text-emphasis outline-none" placeholder={searchbar} />
      </div>
      <section className="border-y pale py-6">{criteria}</section>
      <section className="grid grid-cols-3 gap-6">{cards}</section>
    </main>
  );
}