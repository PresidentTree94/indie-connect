export default function Step({
  number, title, description,
}: Readonly<{
  number: string;
  title: string;
  description: string;
}>) {
  return (
    <div className="pale p-6 rounded-xl bg-card hover:border-primary/40">
      <span className="w-10 h-10 block text-primary bg-primary/20 font-bold text-base flex justify-center items-center rounded-xl">{number}</span>
      <h3 className="mt-4 mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}