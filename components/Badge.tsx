export default function Badge({
  role
}: Readonly<{
  role: "code" | "art" | "music" | "writing";
}>) {

  const colors: Record<string, string> = {
    code: "blue",
    art: "pink",
    music: "yellow",
    writing: "purple",
  };

  return (
    <span className={`btn-sm border border-${colors[role]}-400/30 text-${colors[role]}-400 bg-${colors[role]}-400/10`}>{role.charAt(0).toUpperCase() + role.slice(1)}</span>
  );
}