import Link from "next/link";

const videos = [
  {
    id: 1,
    title: "Sunset vibes",
    user: "@jane",
    likes: "1.2K",
    comments: "84",
  },
  {
    id: 2,
    title: "City walk",
    user: "@alex",
    likes: "890",
    comments: "41",
  },
  {
    id: 3,
    title: "Morning routine",
    user: "@sam",
    likes: "2.4K",
    comments: "133",
  },
];

export default function FeedPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Feed</h1>
          <Link href="/" className="text-pink-400 hover:underline">
            Home
          </Link>
        </div>

        <div className="space-y-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[9/16] bg-gradient-to-b from-pink-700 to-black flex items-end p-6">
                <div>
                  <p className="text-sm text-gray-300">{video.user}</p>
                  <h2 className="text-2xl font-bold">{video.title}</h2>
                </div>
              </div>

              <div className="flex items-center justify-between p-5">
                <div className="flex gap-5 text-sm text-gray-300">
                  <span>❤️ {video.likes}</span>
                  <span>💬 {video.comments}</span>
                </div>
                <button className="rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold hover:bg-pink-700">
                  Watch
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}