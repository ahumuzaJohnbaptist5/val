import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="h-24 w-24 rounded-full bg-pink-600" />
            <div>
              <h1 className="text-3xl font-bold">John Doe</h1>
              <p className="text-gray-400">@john_doe</p>
              <p className="mt-3 max-w-2xl text-gray-300">
                This is a sample profile bio for the MVP demo.
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <Link
              href="/feed"
              className="rounded-full bg-pink-600 px-5 py-2 font-semibold hover:bg-pink-700"
            >
              Go to Feed
            </Link>
            <button className="rounded-full border border-white/10 px-5 py-2 font-semibold hover:bg-white/10">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}