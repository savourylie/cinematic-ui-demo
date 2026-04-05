import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0f0d0b]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-heading text-lg tracking-wide text-[#c4a46a] transition-opacity hover:opacity-80"
        >
          Cinematic UI
        </Link>
        <span className="font-body text-xs tracking-widest text-[#7a7068] uppercase">
          A Claude Skill Demo
        </span>
      </div>
    </header>
  );
}
