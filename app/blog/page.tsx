import Link from "next/link";

export default function Blog() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-green-800 mb-2">🍄 Olive's Garden</h1>
      <p className="text-lg text-green-900 mb-6 italic">
        a carefully curated patch of miscellaneous nonsense 🌱
      </p>

      <ul className="list-disc pl-6 space-y-4 text-green-800">
        <li>
          <Link href="/blog/reads" className="text-emerald-700 underline hover:text-emerald-900">
            📚 Read Reads
          </Link>
          <p className="text-sm text-green-700 ml-4">i'm a literate(?) forest gremlin</p>
        </li>
        <li>
        <Link href="/blog/watches" className="text-emerald-700 underline hover:text-emerald-900">
          🎥 Watched Watches
          </Link>
          <p className="text-sm text-green-700 ml-4">i consume a lot of media alone in my tree trunk</p>
        </li>
        <li>
          <Link href="/blog/thoughts" className="text-emerald-700 underline hover:text-emerald-900">
            💭 Thought Thoughts
          </Link>
          <p className="text-sm text-green-700 ml-4">a pond full of little ripples and brain frogs</p>
        </li>
        <li>
          <Link href="/blog/memes" className="text-emerald-700 underline hover:text-emerald-900">
            🐸 Hoarded Memes
          </Link>
          <p className="text-sm text-green-700 ml-4">some funny leaves i picked up and stuffed in my pockets</p>
        </li>
        <li>
          <Link href="/blog/bits" className="text-emerald-700 underline hover:text-emerald-900">
            ✨ Cool Bits and Bobs
          </Link>
          <p className="text-sm text-green-700 ml-4">code snippets, web trinkets, shiny things</p>
        </li>
      </ul>
    </section>
  );
}
