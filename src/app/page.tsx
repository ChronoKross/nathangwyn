"use client";

import { EncryptedText } from "@/components/EncryptedText";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-6xl flex-col items-center justify-center gap-10 px-6 py-10 md:flex-row md:gap-16">
      <div className="flex-1 space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          Nathan Gwyn · Full-Stack Developer
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          I build modern web experiences that feel fast and human.
        </h1>
        <p className="max-w-xl text-lg text-zinc-300">
          I craft responsive frontends, reliable APIs, and performance-focused
          systems. Clean UX, strong engineering, and measurable outcomes.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
            href="#projects"
          >
            View Work
          </a>
          <a
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-zinc-500"
            href="mailto:hello@nathangwyn.com"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="flex w-full flex-1 items-center justify-center">
        <h2 className="cursor-default text-center text-5xl font-semibold tracking-tight text-zinc-300 md:text-7xl">
          <EncryptedText text="Nathan Gwyn" />
        </h2>
      </div>
    </main>
  );
}
