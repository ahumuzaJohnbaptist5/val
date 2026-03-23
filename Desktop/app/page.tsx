import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-pink-500">
          Short Video MVP
        </p>
        <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
          Build your TikTok-like MVP fast.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          A simple demo with registration, login, profiles, and a video feed to
          show progress today.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/register"
            className="rounded-full bg-pink-600 px-6 py-3 font-semibold text-white hover:bg-pink-700"
          >
            Get Started
          </Link>
          <Link
            href="/feed"
            className="rounded-full border border-gray-700 px-6 py-3 font-semibold text-white hover:bg-gray-900"
          >
            View Feed
          </Link>
        </div>
      </section>
    </main>
  );
}