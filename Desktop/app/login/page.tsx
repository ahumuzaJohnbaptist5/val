import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="mt-2 text-sm text-gray-400">Welcome back.</p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm">Email</label>
            <input
              type="email"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-pink-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm">Password</label>
            <input
              type="password"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-pink-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-pink-600 py-3 font-semibold hover:bg-pink-700"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link href="/register" className="text-pink-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}