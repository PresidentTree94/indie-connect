"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="blurred flex-center justify-between px-8 h-16 fixed top-0 w-full z-1">
      <Link href="/" className="flex items-center gap-2">
        <span className="w-8 h-8 flex-center btn-primary rounded-xl font-bold text-xl font-display">I</span>
        <h3>Indie Connect</h3>
      </Link>
      <div className="flex gap-6 font-medium">
        <Link href="/projects" className={`hover:text-primary transition-colors ${pathname === "/projects" ? "text-primary" : ""}`}>Projects</Link>
        <Link href="/creators" className={`hover:text-primary transition-colors ${pathname === "/creators" ? "text-primary" : ""}`}>Creators</Link>
        <a>Messages</a>
        <a>Notifications</a>
        <a>Settings</a>
      </div>
      <div className="flex gap-3 font-medium">
        <button className="btn-md btn-outline border-emphasis">Create Project</button>
        <Link href="/profile" className="btn-md btn-primary">Profile</Link>
      </div>
    </nav>
  );
}