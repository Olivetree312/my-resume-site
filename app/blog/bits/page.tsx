import Link from "next/link";

export default function BitsPage() {
  return (
    <section>
      <h1 className="text-xl font-bold mb-4">✨Cool Bits and Bobs</h1>
      <p>~Shiny things...MY PRECIOUS</p>

      <section className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-yellow-900 mb-4">mini shrines to my fav things</h1>
        <div className="space-y-6">

          <div className="p-4 bg-white rounded-xl border border-yellow-200">
            <h2 className="text-xl font-semibold text-yellow-900"> 🐸 a blog about frogs—a frog blog</h2>
            <p className="text-yellow-800 mb-2">
            green, slimy, and beautiful!
            </p>
            <a
              href="/frog-blog/"
              className="text-amber-700 underline hover:text-amber-900"
            >
              FrogBlog
            </a>
          </div>
        </div>
      </section>

      <Link href="/blog" className="text-blue-600 underline mt-4 block">
        ← Back to Blog
      </Link>
    </section>
  );
}
