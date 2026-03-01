export default function TwitchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-zinc-900 text-zinc-100">
      <main className="mx-auto w-full max-w-5xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          Twitch
        </p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          Stream Schedule
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-300">
          Coming soon. This page will host my weekly schedule, upcoming streams,
          and highlights.
        </p>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <p className="text-sm text-zinc-500">
            Want me to wire this to a Google Calendar or Twitch API later? I can
            do that.
          </p>
        </div>
      </main>
    </div>
  );
}
