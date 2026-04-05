import Image from "next/image";
import Link from "next/link";
import { Demo } from "@/data/demos";

export default function DemoCard({ demo }: { demo: Demo }) {
  return (
    <Link href={`/demo/${demo.slug}`} className="group block">
      <article
        className="relative overflow-hidden rounded-lg border border-white/[0.06] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:border-white/[0.12]"
        style={
          {
            "--card-accent": demo.palette.accent,
            "--card-bg": demo.palette.bg,
          } as React.CSSProperties
        }
      >
        {/* Screenshot preview */}
        <div className="relative h-44 overflow-hidden" style={{ background: demo.palette.bg }}>
          <Image
            src={`/assets/${demo.slug}.png`}
            alt={`${demo.filmTitle} demo screenshot`}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(ellipse at bottom, ${demo.palette.accent}22, transparent 70%)`,
            }}
          />
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-4">
            <div className="flex gap-1.5">
              {[demo.palette.bg, demo.palette.accent, demo.palette.text].map(
                (color, i) => (
                  <div
                    key={i}
                    className="h-3 w-3 rounded-full border border-white/20"
                    style={{ background: color }}
                  />
                )
              )}
            </div>
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase"
              style={{
                background: `${demo.palette.accent}20`,
                color: demo.palette.accent,
              }}
            >
              {demo.mood}
            </span>
          </div>
          {/* Bottom gradient fade into card body */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#161412] to-transparent" />
        </div>

        {/* Card body */}
        <div className="space-y-3 bg-[#161412] p-5">
          <div>
            <h3 className="font-heading text-xl text-[#e8e0d4] transition-colors duration-300 group-hover:text-[var(--card-accent)]">
              {demo.filmTitle}
            </h3>
            <p className="mt-0.5 font-body text-sm text-[#7a7068]">
              {demo.director}, {demo.year}
            </p>
          </div>

          <p className="font-body text-sm leading-relaxed text-[#9a918a]">
            {demo.tagline}
          </p>

          <div className="flex items-center justify-between pt-1">
            <span className="text-xs tracking-wider text-[#5a534d] uppercase">
              {demo.siteType}
            </span>
            <span className="text-xs text-[#5a534d] transition-colors duration-300 group-hover:text-[var(--card-accent)]">
              View demo &rarr;
            </span>
          </div>
        </div>

        {/* Hover glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            boxShadow: `inset 0 0 0 1px ${demo.palette.accent}30, 0 0 20px ${demo.palette.accent}10`,
          }}
        />
      </article>
    </Link>
  );
}
