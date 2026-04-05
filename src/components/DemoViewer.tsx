"use client";

import { useState } from "react";
import Link from "next/link";
import { Demo } from "@/data/demos";

export default function DemoViewer({ demo }: { demo: Demo }) {
  const [currentPage, setCurrentPage] = useState(demo.pages[0].file);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#0f0d0b] px-4 py-2">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-body text-sm text-[#7a7068] transition-colors hover:text-[#e8e0d4]"
          >
            &larr; Back
          </Link>
          <div className="h-4 w-px bg-white/[0.08]" />
          <div>
            <h1 className="font-heading text-sm text-[#e8e0d4]">
              {demo.filmTitle}
            </h1>
            <p className="font-body text-[11px] text-[#5a534d]">
              {demo.director}
            </p>
          </div>
        </div>

        {/* Page tabs */}
        <div className="flex items-center gap-1">
          {demo.pages.map((page) => (
            <button
              key={page.file}
              onClick={() => setCurrentPage(page.file)}
              className={`rounded px-3 py-1 font-body text-xs transition-colors ${
                currentPage === page.file
                  ? "text-[#e8e0d4]"
                  : "text-[#5a534d] hover:text-[#9a918a]"
              }`}
              style={
                currentPage === page.file
                  ? { background: `${demo.palette.accent}20`, color: demo.palette.accent }
                  : undefined
              }
            >
              {page.label}
            </button>
          ))}
          <div className="mx-2 h-4 w-px bg-white/[0.08]" />
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={`rounded px-2 py-1 font-body text-xs transition-colors ${
              showInfo ? "text-[#c4a46a]" : "text-[#5a534d] hover:text-[#9a918a]"
            }`}
          >
            Info
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="relative flex flex-1 overflow-hidden">
        {/* Iframe */}
        <iframe
          key={currentPage}
          src={`/demos/${demo.slug}/${currentPage}`}
          className="flex-1 border-0 bg-white"
          sandbox="allow-scripts allow-same-origin"
          title={`${demo.filmTitle} - ${currentPage}`}
        />

        {/* Info panel */}
        {showInfo && (
          <div className="w-72 shrink-0 overflow-y-auto border-l border-white/[0.06] bg-[#12100e] p-5">
            <div className="space-y-5">
              <div>
                <h2 className="font-heading text-base text-[#e8e0d4]">
                  {demo.siteName}
                </h2>
                <p className="mt-0.5 font-body text-xs text-[#5a534d]">
                  {demo.siteType}
                </p>
              </div>

              <p className="font-body text-sm leading-relaxed text-[#9a918a]">
                {demo.description}
              </p>

              <div>
                <h3 className="mb-2 font-body text-[11px] font-medium tracking-wider text-[#7a7068] uppercase">
                  Palette
                </h3>
                <div className="flex gap-2">
                  {[
                    { label: "BG", color: demo.palette.bg },
                    { label: "Accent", color: demo.palette.accent },
                    { label: "Text", color: demo.palette.text },
                  ].map(({ label, color }) => (
                    <div key={label} className="text-center">
                      <div
                        className="mx-auto h-8 w-8 rounded border border-white/10"
                        style={{ background: color }}
                      />
                      <span className="mt-1 block font-mono text-[9px] text-[#5a534d]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-body text-[11px] font-medium tracking-wider text-[#7a7068] uppercase">
                  Techniques
                </h3>
                <ul className="space-y-1">
                  {demo.techniques.map((t) => (
                    <li
                      key={t}
                      className="font-body text-xs text-[#9a918a]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-body text-[11px] font-medium tracking-wider text-[#7a7068] uppercase">
                  Mood
                </h3>
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs"
                  style={{
                    background: `${demo.palette.accent}15`,
                    color: demo.palette.accent,
                  }}
                >
                  {demo.mood}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
